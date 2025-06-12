"use client";

import React, { useState } from "react";
import { Upload, FileText, X } from "lucide-react";
import { UploadedFile } from "./types";

export default function FileUploadZone() {
  const [file, setFile] = useState<UploadedFile | null>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const userFile = files[0];
    const newFile: UploadedFile = {
      file: userFile,
      name: userFile.name,
      size: userFile.size,
    };

    setFile(newFile);
  };

  const removeFile = () => {
    setFile(null)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <>
        {!file ? (
        <div className="relative h-[263px] border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
            <Upload className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <p className="text-blue-700 text-xl font-bold mb-2">Click to upload PA form</p>
            <p className="text-medium text-blue-500">PDF files only</p>
            <div className="absolute inset-0 z-10" onClick={() => document.getElementById("pa-form-input")?.click()}>
                <input
                id="pa-form-input"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
                />
            </div>
        </div>
      ) : (
        <div className="flex items-center justify-between bg-blue-50 h-[100px] border-1 border-blue-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <div className="flex flex-col items-start">
                    <p className="font-bold text-lg text-blue-900">{file.name}</p>
                    <p className="text-sm text-blue-600">{formatFileSize(file.size)}</p>
                </div>
            </div>
            <button
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                onClick={removeFile}
            >
                    <X className="h-5 w-5" />
            </button>
        </div>
      )}
    </>
  );
}
