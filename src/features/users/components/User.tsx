import { createUser } from "../actions/user.actions";

export default async function User() {
  const handleCreateUser = async () => {
    "use server";
    console.log("clicked");
    await createUser();
  };
  return (
    <div>
      <form action={handleCreateUser}>
        <button type="button">Create</button>
      </form>
    </div>
  );
}
