import { Header } from "../ui/components/header";
import { Journal } from "../ui/components/journal";
import { Emotion } from "../ui/components/emotion";

export default function Page() {
  return (
    <main className="m-8">
      <Header
        title="Daily Check In"
        name="Jenny"
        subtext="take your self-care moment"
      />
      <div className="flex flex-col justify-center items-center space-y-4">
      <Emotion/>
      <Journal/>
      </div>

    </main>
  );
}
