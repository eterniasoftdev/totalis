"use client";

import { Button } from "@/components/custom_ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/custom_ui/dialog";
import { TotalisForm } from "@/components/TotalisForm";
import React, { useRef } from "react";

export function DialogBasicDetail() {
  const brochureUrl =
    "https://www.hindalco.com/upload/pdf/totalis-brochure.pdf";
  // Redirect helper
  const redirectToBrochure = () => {
    window.open(brochureUrl, "_blank");
  };

  // Handle form submission
  const handleFormSubmit = () => {
    // simulate successful form submission
    // You can trigger this via a prop passed to <TotalisForm onSuccess={handleFormSubmit} />
    redirectToBrochure();
  };

  // Handle skip click
  const handleSkip = () => {
    redirectToBrochure();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center cursor-pointer">Brochure</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col px-2">
        <DialogHeader>
          <DialogTitle>Basic Details</DialogTitle>
          <DialogDescription>Please provide your details</DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pt-4">
          <TotalisForm onSuccess={handleFormSubmit} />
        </div>

        <DialogFooter className="flex justify-between">
          <Button variant="ghost" type="button" onClick={handleSkip}>
            Skip
          </Button>
          {/* <DialogClose asChild>
            <Button type="button" variant="ghost" ref={closeButton}>
              Close
            </Button>
          </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
