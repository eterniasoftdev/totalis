import Button_Primary from "@/atoms/Buttons/Button-Primary";
import React from "react";

function ContactUs() {
  return (
    <div className="p-8 h-screen overflow-y-hidden">
      <div className="flex flex-row bg-teal-800 h-screen">
        <img
          src="/img/aljhon-umlas-sXiyYOQV61o-unsplash.jpg"
          alt=""
          className="w-3/5 object-cover"
        />
        <div className="w-2/5 p-6 flex flex-col justify-center items-center gap-8 text-white">
          <h2 className="text-4xl font-medium leading-10">
            Send us your requirement, and talk to our window expert!
          </h2>
          <p className="text-lg">
            We are always on the lookout for the exciting and innovative
            projects and installations to share with the Flos universe.
          </p>
          <div className="mt-4 flex self-start ">
            <Button_Primary text="Discover More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
