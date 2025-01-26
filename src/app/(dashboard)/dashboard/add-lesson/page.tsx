import { getServerAuthSession } from "@/lib/authOptions";

export default async function AddLesson() {
  const session = await getServerAuthSession();
  console.log(session);
  return (
    <div>
      <p>AddLesson Page</p>
    </div>
  );
}
