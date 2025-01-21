import { Input } from "@/components/ui/input";
import { createUser } from "../server/actions/user.action";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default async function User() {
  return (
    <div>
      <form action={createUser}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input name="name" type="name" id="name" placeholder="Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="photo">Photo</Label>
          <Input name="photo" type="photo" id="photo" placeholder="Photo" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
