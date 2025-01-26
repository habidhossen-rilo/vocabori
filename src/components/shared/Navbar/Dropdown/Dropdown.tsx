import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="inline cursor-pointer bg-transparent shadow-none outline-none">
          My Account
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
        alignOffset={-15}
        sideOffset={15}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>
              <CgProfile className="text-lg" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard">Dashboard</Link>
            <DropdownMenuShortcut>
              <MdDashboard className="text-lg" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => signOut()}
          className="hover:text-red-600x text-red-600"
        >
          Log out
          <DropdownMenuShortcut>
            <CiLogout className="text-lg" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
