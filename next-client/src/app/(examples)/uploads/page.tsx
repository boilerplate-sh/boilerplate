"use client";
import { useUploadMedia } from "@/api/mutateData/media/useUploadMedia";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function page() {
  const { mutate: uploadFile } = useUploadMedia();
  const [files, setFiles] = useState<FileList | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!files) return;

    const formData = new FormData();
    for (const file of files) {
      formData.append("files[]", file);
    }

    uploadFile(file);
  };

  return (
    <div>
      <h3>Simple uploads</h3>
      <form onSubmit={onSubmit} className="flex gap-2">
        <Input type="file" name="file" onChange={(e) => setFiles(e)} />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
