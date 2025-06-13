import { FileText } from "lucide-react"
import FileUploadZone from "./FileUploadZone"

interface UploadPDFProps {
    type: string;
    instructions: string;
    inputId: string;
}

export default function UploadPDF({ type, instructions, inputId }: UploadPDFProps) {
    return (
        <div className="border-blue-300 hover:border-blue-400 transition-colors bg-white rounded-lg border-2 w-[500px] h-[375px] p-4">
            
            <div className="pb-4">
                <div className="text-blue-900 flex items-center gap-2 text-3xl font-bold">
                        <FileText className="h-8 w-8" />
                        {type}
                </div>
                <p className='text-gray-600'>{instructions}</p>
            </div>

            <FileUploadZone type={type} inputId={inputId}/>
        </div>
    )
}