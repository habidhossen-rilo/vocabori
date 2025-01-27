"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "../styles/profile.module.css";
import { Edit, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const UserProfile = () => {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    photo: session?.user?.photo || "/default-profile.jpg",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Edited data:", editedData);

    setIsEditing(false);
    // Here you would typically send this data to your backend
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.content}>
            <div className={styles.profileImageMobile}>
              <Image
                src={editedData.photo || "/placeholder.svg"}
                alt="Profile"
                className={styles.profileImageMobile}
                width={192}
                height={192}
              />
            </div>

            <h1 className={styles.name}>{editedData.name}</h1>
            <div className={styles.divider}></div>

            <p className={styles.location}>
              <MailIcon size={16} className="mr-2" />
              {editedData.email}
            </p>
            <p className={styles.description}>
              Totally optional short description about yourself, what you do and
              so on.
            </p>

            <Sheet>
              <SheetTrigger asChild>
                <button className={styles.contactButton}>
                  <Edit size={16} className="mr-2" />
                  Edit Profile
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={editedData.name}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={editedData.email}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="photo" className="text-right">
                        Photo URL
                      </Label>
                      <Input
                        id="photo"
                        name="photo"
                        value={editedData.photo}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="password" className="text-right">
                        New Password
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={editedData.password}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </form>
              </SheetContent>
            </Sheet>

            {isEditing && (
              <div className="mt-4 rounded-md bg-gray-100 p-4">
                <h2 className="mb-2 text-lg font-semibold">Edited Data:</h2>
                <p>
                  <strong>Name:</strong> {editedData.name}
                </p>
                <p>
                  <strong>Email:</strong> {editedData.email}
                </p>
                <p>
                  <strong>Photo URL:</strong> {editedData.photo}
                </p>
                <p>
                  <strong>Password:</strong>{" "}
                  {editedData.password ? "Changed" : "Not changed"}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.imageCol}>
          <Image
            src={editedData.photo || "/placeholder.svg"}
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
