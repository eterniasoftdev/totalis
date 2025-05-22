// src/types/zoho.d.ts
export interface ZohoLead {
  Mobile: string;
  Phone: string;
  Lead_Status: string;
  First_Name: string;
  Last_Name: string;
  Email: string;
  Originating_Source: string;
  Zip_Code: string;
  Lead_Sub_Source: string;
  Touchpoint_Source: string;
  Likely_Budget: string;
  Purpose: string;
  I_am_a: string;
  City: string;
  State_Name: string;
  Layout: string;
}

export interface ZohoTokenResponse {
  access_token: string;
  scope: string;
  api_domain: string;
  token_type: string;
  expires_in: number;
}

export interface ZohoLeadResponse {
  data: Array<{
    code: string;
    details: {
      Modified_Time: string;
      Modified_By: {
        name: string;
        id: string;
      };
      Created_Time: string;
      id: string;
      Created_By: {
        name: string;
        id: string;
      };
    };
    message: string;
    status: string;
  }>;
}
