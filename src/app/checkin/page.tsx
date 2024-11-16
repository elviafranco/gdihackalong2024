import { Header } from "../ui/components/header";
import { Journal } from "../ui/components/journal";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50 p-8">
      {/* Removed box styling */}
      <div className="w-full max-w-4xl space-y-6 text-center">
        {/* Header Section */}
        <Header
          title="Daily Check In"
          name="Hello User"
          subtext="Take your self-care moment"
        />
          {/* Journal Form */}
          <Journal />
        </div>
      </div>
  );
}
