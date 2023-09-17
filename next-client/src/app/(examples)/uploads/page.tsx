"use client";
import { useUpload } from "@/api/mutateData/upload/useUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function page() {
  const { mutate: uploadFile } = useUpload();
  const [files, setFiles] = useState<FileList | null>(null);
  console.log(files?.[0]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!files) return;
    uploadFile(files[0]);
  };

  return (
    <div>
      <h3>Simple uploads</h3>
      <form onSubmit={onSubmit} className="flex gap-2">
        <Input
          type="file"
          name="file"
          onChange={(e) => setFiles(e.target.files)}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
