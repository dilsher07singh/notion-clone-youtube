import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";
import React from "react";

async function DocLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>; // ✅ params is a Promise
}) {
  console.log("YES ENTERING");

  auth.protect();

  const { id } = await params; // ✅ Await params before using it

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;
