import { Header } from "../ui/components/header";
import { CheckIn } from "../ui/components/checkinbtn";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between flex-wrap-reverse m-4 ">
        <Header
          title="Welcome"
          name="Elvia"
          subtext="how are you feeling today?"
        />
        <Link href="/">
          <button className="flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200">
            <ArrowRightEndOnRectangleIcon className="h-5 w-5 mr-2 text-gray-600" />
          </button>
        </Link>
      </div>
      <CheckIn/>
    </div>
  );
}
