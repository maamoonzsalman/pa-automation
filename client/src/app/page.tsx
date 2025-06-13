import UploadPAForm from "@/components/UploadPAForm";
import UploadReferralForm from "@/components/UploadReferral";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Prior Authorization Automation</h1>
            <p className="text-blue-600 text-lg">Streamline your PA form processing with AI-powered automation</p>
          </div>
          
          <div className="flex gap-6">
            <UploadPAForm/>
            <UploadReferralForm/>
          </div>
        </div>
    </div>
  );
}
