import { Header } from "../ui/components/header";
import { Journal } from "../ui/components/journal";

export default function Page() {
  return (
    <>
      <Header
        title="Daily Check In"
        name="Elvia"
        subtext="take your self-care moment"
      />
      <Journal />
    </>
  );
}
