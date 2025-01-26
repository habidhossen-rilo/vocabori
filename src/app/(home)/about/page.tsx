import { getServerAuthSession } from "@/lib/authOptions";

export default async function AboutPage() {
  const session = await getServerAuthSession();
  console.log(session);
  return (
    <div>
      <p>AboutPage</p>
    </div>
  );
}
