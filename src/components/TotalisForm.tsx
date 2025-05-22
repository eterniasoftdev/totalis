// components/TotalisForm.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { city, state } from "@/lib/stateData";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  whatsapp: z.string().min(10, {
    message: "Please enter a valid WhatsApp number.",
  }),
  pincode: z.string().min(6, {
    message: "Please enter a valid pincode.",
  }),
  state: z.string().min(1, {
    message: "Please select a state.",
  }),
  city: z.string().min(1, {
    message: "Please select a city.",
  }),
  purpose: z.enum(["Buy a Totalis Product", "Become a Totalis Partner"], {
    required_error: "Please select an option.",
  }),
  persona: z.enum([
    "Distributor",
    "Individual Home Owner",
    "Architect/Interior Decorator/Consultant",
  ]),
  budget: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export function TotalisForm({ onSuccess }: { onSuccess: () => void }) {
  const { toast } = useToast();
  const [isLoadingPincode, setIsLoadingPincode] = useState(false);
  const [cityList, setCityList] = useState<string[]>([]);
  const [showBudget, setShowBudget] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      pincode: "",
      state: "",
      city: "",
      purpose: undefined,
      persona: undefined,
      budget: undefined,
      agree: false,
    },
  });

  const purpose = form.watch("purpose");
  const pincode = form.watch("pincode");

  // Auto-populate city and state when pincode changes
  useEffect(() => {
    const fetchPincodeData = async () => {
      if (pincode.length === 6 && /^\d+$/.test(pincode)) {
        setIsLoadingPincode(true);
        try {
          const response = await axios.get(
            `https://api.postalpincode.in/pincode/${pincode}`
          );

          if (
            response.data[0]?.Status === "Success" &&
            response.data[0]?.PostOffice?.length > 0
          ) {
            const postOffice = response.data[0].PostOffice[0];
            const resolvedCity = postOffice.Block || postOffice.District || "";
            const resolvedState = postOffice.State || "";
            setCityList([resolvedCity]);
            form.setValue("state", resolvedState);
            setTimeout(() => {
              form.setValue("city", resolvedCity);
            }, 100);
          } else {
            form.setValue("city", "");
            form.setValue("state", "");
            setCityList([]);
            toast({
              title: "Pincode not found",
              description: "Please enter a valid pincode.",
              variant: "destructive",
            });
          }
        } catch (error) {
          console.error("Error fetching pincode data:", error);
          toast({
            title: "Error",
            description: "Failed to fetch pincode details.",
            variant: "destructive",
          });
        } finally {
          setIsLoadingPincode(false);
        }
      }
    };

    const timer = setTimeout(() => {
      if (pincode.length === 6) {
        fetchPincodeData();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [pincode, form, toast]);
  React.useEffect(() => {
    setShowBudget(purpose === "Buy a Totalis Product");
  }, [purpose]);

  const handleStateChange = (value: string) => {
    form.setValue("state", value);
    form.setValue("city", "");
    setCityList(city[state.indexOf(value)] || []);
  };

  // Update the onSubmit function in your TotalisForm.tsx
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const reqBody = {
      First_Name: values.name.split(" ")?.[0] || "NA",
      Last_Name: values.name.split(" ")?.[1] || "NA",
      Email: values.email,
      Mobile: values.whatsapp,
      Zip_Code: values.pincode,
      State_Name: values.state,
      City: values.city,
      User_Persona: values.persona,
      Price_Bracket: values.budget || "",
      Requirement: [values.purpose],
      Lead_SubSource: "Totalis Website",
    };

    try {
      const response = await fetch("/api/totalis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      await response.json();

      toast({
        title: "Enquiry created successfully",
        description: "Our sales person executive will contact you soon.",
      });
      onSuccess();
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your form.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="WhatsApp Number"
                  {...field}
                  pattern="[0-9]*"
                  type="phone"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input placeholder="Pincode" {...field} maxLength={6} />
                  {isLoadingPincode && (
                    <Loader2 className="absolute right-3 top-3 h-4 w-4 animate-spin" />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleStateChange(value); // Update city list
                }}
                value={field.value}
                disabled={isLoadingPincode}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {state.map((stateName, index) => (
                    <SelectItem key={index} value={stateName}>
                      {stateName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={isLoadingPincode}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cityList.map((cityName, index) => (
                    <SelectItem key={index} value={cityName}>
                      {cityName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="purpose"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="I am looking to..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Buy a Totalis Product">
                    Buy a Totalis Product
                  </SelectItem>
                  <SelectItem value="Become a Totalis Partner">
                    Become a Totalis Partner
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="persona"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="I am a..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Distributor">Distributor</SelectItem>
                  <SelectItem value="Individual Home Owner">
                    Individual Home Owner
                  </SelectItem>
                  <SelectItem value="Architect/Interior Decorator/Consultant">
                    Architect/Interior Decorator/Consultant
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {showBudget && (
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Likely Budget (₹)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="<400">Less than ₹400</SelectItem>
                    <SelectItem value="400-800">₹400-₹800</SelectItem>
                    <SelectItem value=">800">More than ₹800</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree with the{" "}
                  <a href="/static/privacy" className="underline">
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a href="/static/t&c" className="underline">
                    terms and conditions
                  </a>{" "}
                  of Totalis
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
