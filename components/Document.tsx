"use client";
import React, {
  FormEvent,
  use,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "./Editor";
import useOwner from "@/lib/useOwner";
import DeleteDocument from "./DeleteDocument";
import InviteUser from "./InviteUser";
import ManageUsers from "./ManageUsers";
import Avatars from "./Avatars";

interface DocumentProps {
  id: string;
}
function Document({ id }: DocumentProps) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");

  const [isUpdating, startTransition] = useTransition();
  const isOwner = useOwner();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        // Update the title
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
      });
    }
  };

  return (
    <div className="flex-1 h-full bg-white p-5">
      <div className="flex max-w-6xl mx-auto  justify-between pb-5">
        <form className="flex  flex-1 space-x-2" onSubmit={updateTitle}>
          {/* Update title  */}
          <Input value={input} onChange={(e) => setInput(e.target.value)} />

          <Button>{isUpdating ? "Updating..." : "Update"}</Button>
          {/* IF IS OWNER AND THEN INVITE USER, DELETE DOCUMENT  */}

          {isOwner && (
            <>
              {/* Invite user  */}
              <InviteUser />
              {/* Delete document  */}
              <DeleteDocument />
            </>
          )}
        </form>
      </div>

      <div className="flex max-w-6xl mx-auto justify-between items-center mb-5">
        {/* Manage Users  */}

        <ManageUsers />

        {/* Avatars  */}
        <Avatars />
      </div>

      <hr className="pb-10" />

      {/* Collobarative editor  */}

      <Editor />
    </div>
  );
}

export default Document;
