import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export function Header() {
  return (
    <div className="m-4 flex flex-wrap items-center justify-between flex-wrap-reverse">
      <div>
        <h1 className="text-5xl my-4 text-gray-800">Welcome,</h1>
        <h2 className="text-4xl text-gray-700">Elvia, how are you feeling today?</h2>
      </div>
      <Link href="/">
        <button className="flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200">
          <ArrowRightEndOnRectangleIcon className="h-5 w-5 mr-2 text-gray-600" />
        </button>
      </Link>
    </div>
  );
}
