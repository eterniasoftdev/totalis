"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { state } from "@/lib/stateData";
import Link from "next/link";
import axios from "axios";
const nameRegex = /^[a-zA-Z\s'-]+$/;

// Mobile number validation regex
const mobileRegex = /^\d{10}$/;

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(nameRegex, "Invalid name format"),
  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(mobileRegex, "Mobile number must be exactly 10 digits"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  state: z.string().min(1, "State name is required"),
});
export function DialogBasicDetail() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      state: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const reqBody = {
      First_Name: values.name.split(" ")?.[0] || "NA",
      Last_Name: values.name.split(" ")?.[1] || "NA",
      Email: values.email,
      Mobile: values.mobile,
      State_Name: values.state,
    };
    console.log("reqbody", reqBody);
    const response = await axios.post(
      "https://api.eterniasoft.in/api/v1/totalis/createContact",
      reqBody,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZxemV5eWFqc2ExNTJtYXNta25zZGF3eHpsIiwiaWF0IjoxNzEwMjQ2NTMwLCJleHAiOjE3NDE3ODI1MzB9.FZs-WBCuURHOIpBaEVA_l8cKlmqGcrUQf8iDaHimiik",
        },
      }
    );
    window.open(
      "https://www.hindalco.com/upload/pdf/totalis-brochure.pdf",
      "_blank"
    );
    if (response.status == 200) {
      form.reset();
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <div className="flex items-center cursor-pointer">Brochure</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Basic Details</DialogTitle>
          <DialogDescription>
            Please provide your basic details
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="" {...field} />
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
                    <FormLabel>State</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      //   defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the state you belong to" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {state.map((el) => (
                          <SelectItem value={el}>{el}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="flex flex-row justify-between">
                <Link
                  href="https://www.hindalco.com/upload/pdf/totalis-brochure.pdf"
                  target="_blank"
                  className="mr-auto"
                >
                  <Button type="button" variant="ghost">
                    Skip
                  </Button>
                </Link>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
