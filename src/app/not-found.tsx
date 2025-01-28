import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <h2>Not Found</h2>
      <p>Could not find requested page</p>
      <Link href="/" className="rounded-lg bg-brand px-2 py-1 text-white">
        Return Home
      </Link>
    </div>
  );
}
