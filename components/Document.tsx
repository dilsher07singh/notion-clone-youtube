import React from "react";

interface DocumentProps {
  id: string;
}
function Document({ id }: DocumentProps) {
  console.log("Document ID", id);
  return <div>Document: {id}</div>;
}

export default Document;
