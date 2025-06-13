import React from "react";
import FileUploadZone from "./FileUploadZone";
import { FileText } from "lucide-react";

export default function UploadReferralForm() {
    return (
        <div className="border-blue-300 hover:border-blue-400 transition-colors bg-white rounded-lg border-2 w-[500px] h-[375px] p-4">
            
            <div className="pb-4">
                <div className="text-blue-900 flex items-center gap-2 text-3xl font-bold">
                        <FileText className="h-8 w-8" />
                        Referral Package
                </div>
                <p className='text-gray-600'>Upload the supporting documentation PDF</p>
            </div>

            <FileUploadZone/>
        </div>
    )
}