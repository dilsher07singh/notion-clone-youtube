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

interface DocumentProps {
  id: string;
}
function Document({ id }: DocumentProps) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");

  const [isUpdating, startTransition] = useTransition();

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
    <div>
      <div className="flex max-w-6xl mx-auto  justify-between pb-5">
        <form className="flex  flex-1 space-x-2" onSubmit={updateTitle}>
          {/* Update title  */}
          <Input value={input} onChange={(e) => setInput(e.target.value)} />

          <Button>{isUpdating ? "Updating..." : "Update"}</Button>
          {/* IF IS OWNER AND THEN INVITE USER, DELETE DOCUMENT  */}
        </form>
      </div>

      <div>
        {/* Manage Users  */}

        {/* Avatars  */}
      </div>

      {/* Collobarative editor  */}
    </div>
  );
}

export default Document;
