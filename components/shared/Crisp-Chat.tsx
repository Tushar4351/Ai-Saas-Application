"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("0cab720e-10ef-4e9f-a051-52a1efc76d0f");
  }, []);

  return null;
}
