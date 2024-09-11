import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-center p-2 gap-8">
      <h1 className="text-xl font-bold">Sidebar</h1>
      <div className="flex flex-col gap-2">
        <Link
          href="/"
          className="flex justify-start items-center text-black font-semibold bg-gray-100 active:bg-gray-300 hover:bg-slate-300 p-2 rounded-lg"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
