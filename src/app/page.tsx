"use client";

import { Phone } from "@/registry/new-york/phone/ui/phone";
import Link from "next/link";
import * as React from "react";

export default function Page() {
  const [formData, setFormData] = React.useState({
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold uppercase">
          Shadcn Phone Input Registry
        </h1>
        <p>
          See full documentation at here:{" "}
          <Link
            className="underline font-bold"
            href={"https://github.com/vorhdam/phone"}
          >
            Github
          </Link>
        </p>
      </div>
      <div className="w-80">
        <Phone
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          placeholder="Your phone number"
        />
      </div>
      <div className="flex flex-row items-center gap-1.5">
        <span>Your phone number is:</span>
        <code className="bg-card p-1 rounded-md">{formData.phone}</code>
      </div>
    </div>
  );
}
