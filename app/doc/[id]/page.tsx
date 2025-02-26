"use client";
import Document from "@/components/Document";
import React from "react";

interface DocumentPageProps {
  params: {
    id: string;
  };
}

function DocumentPage({ params: { id } }: DocumentPageProps) {
  console.log("Document ID", id);

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}

export default DocumentPage;
