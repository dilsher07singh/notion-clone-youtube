"use client";
import Document from "@/components/Document";
import { useParams } from "next/navigation";
import React from "react";

function DocumentPage() {
  const params = useParams(); // ✅ Get params properly
  const id = params?.id as string; // ✅ Extract `id` safely
  console.log("Document ID", id);

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}

export default DocumentPage;
