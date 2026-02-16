"use client";

import { Phone } from "@/registry/new-york/phone/ui/phone";
import * as React from "react";

export default function Page() {
  const [formData, setFormData] = React.useState({
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(value);
  };

  return (
    <div className="flex items-center justify-center p-4 w-full">
      <div className="w-80">
        <Phone
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          placeholder="Your phone number"
        />
      </div>
    </div>
  );
}
