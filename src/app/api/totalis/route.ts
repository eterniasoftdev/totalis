// src/app/api/totalis/route.ts
import { NextResponse } from "next/server";

// Corrected ZohoError type
type ZohoError = {
  code: string;
  details: {
    api_name?: string;
    duplicate_record?: {
      id: string;
      module: {
        api_name: string;
        id: string;
      };
      Owner: {
        name: string;
        id: string;
        zuid: string;
      };
    };
    json_path: string;
    more_records: boolean;
  };
  message: string;
  status: string;
};

// Corrected ZohoResponse type
type ZohoResponse = {
  data: Array<{
    code: string;
    details: {
      errors?: ZohoError[];
    };
    message: string;
    status: string;
  }>;
};

type LeadData = {
  Mobile: string;
  Phone: string;
  Lead_Status: string;
  First_Name: string;
  Last_Name: string;
  Email: string;
  Originating_Source: string;
  Zip_Code: string;
  Lead_Sub_Source1: string;
  Touchpoint_Source: string;
  Likely_Budget: string;
  Purpose: string;
  I_am_a: string;
  City: string;
  State_Name: string;
  Layout: string;
};

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;

export async function POST(request: Request) {
  console.log("Received request to /api/totalis");
  try {
    const body = await request.json();

    if (!body.First_Name || !body.Email || !body.Mobile) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const tokenResponse = await fetch(
      `https://accounts.zoho.in/oauth/v2/token?refresh_token=${ZOHO_REFRESH_TOKEN}&client_id=${ZOHO_CLIENT_ID}&client_secret=${ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      throw new Error(`Failed to get Zoho access token: ${errorText}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    console.log("Access Token obtained successfully");

    const leadData: { data: LeadData[] } = {
      data: [
        {
          Mobile: body.Mobile,
          Phone: body.Mobile,
          Lead_Status: "New Enquiry",
          First_Name: body.First_Name,
          Last_Name: body.Last_Name || "NA",
          Email: body.Email,
          Originating_Source: "Digital Organic",
          Zip_Code: body.Zip_Code || "",
          Lead_Sub_Source1: "SEO",
          Touchpoint_Source: "Website",
          Likely_Budget: body.Price_Bracket || "",
          Purpose: body.Requirement?.[0] || "",
          I_am_a: body.User_Persona || "",
          City: body.City || "",
          State_Name: body.State_Name || "",
          Layout: "158127000261416569",
        },
      ],
    };

    console.log("Attempting to create lead in Zoho CRM");
    const leadResponse = await fetch("https://www.zohoapis.in/crm/v6/Leads", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const leadResult: ZohoResponse = await leadResponse.json();
    console.log("Zoho CRM response:", leadResult);

    const mainResponse = leadResult.data?.[0];
    const errors = mainResponse?.details?.errors;

    if (!leadResponse.ok && mainResponse?.code === "MULTIPLE_OR_MULTI_ERRORS") {
      const duplicateErrors = errors?.filter(
        (error) => error.code === "DUPLICATE_DATA"
      );

      if (
        duplicateErrors &&
        duplicateErrors.length > 0 &&
        duplicateErrors[0].details?.duplicate_record?.id
      ) {
        const duplicateRecordId =
          duplicateErrors[0].details.duplicate_record.id;

        const updateData: Partial<LeadData> = { ...leadData.data[0] };

        duplicateErrors.forEach((error) => {
          if (error.details?.api_name) {
            const fieldName = error.details.api_name as keyof LeadData;
            delete updateData[fieldName];
          }
        });

        updateData.Lead_Status = "New Enquiry";
        updateData.Touchpoint_Source = "Website";
        updateData.Lead_Sub_Source1 = "SEO";

        console.log("Updating existing record with ID:", duplicateRecordId);
        const updateResponse = await fetch(
          `https://www.zohoapis.in/crm/v6/Leads/${duplicateRecordId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Zoho-oauthtoken ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: [updateData] }),
          }
        );

        if (!updateResponse.ok) {
          const updateError = await updateResponse.json();
          throw new Error(
            `Failed to update duplicate record: ${JSON.stringify(updateError)}`
          );
        }

        const updateResult = await updateResponse.json();
        console.log("Successfully updated duplicate record");
        return NextResponse.json(
          {
            success: true,
            data: updateResult,
            message: "Existing record updated successfully",
          },
          { status: 200 }
        );
      }
    }

    if (!leadResponse.ok) {
      throw new Error(`Zoho CRM error: ${JSON.stringify(leadResult)}`);
    }

    return NextResponse.json(
      {
        success: true,
        data: leadResult,
        message: "New record created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in Totalis form submission:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
