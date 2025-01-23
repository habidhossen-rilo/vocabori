"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { userSchema } from "../validation/userValidation";
import { createUser } from "../server/actions/user.action";
import { signIn } from "next-auth/react";

export default function SignUpForm() {
  const [formResponse, setFormResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      photo: "",
      role: "user",
    },
  });

  function onSubmit(values: z.infer<typeof userSchema>) {
    createUser(values)
      .then((result) => {
        setFormResponse(result);
        if (result.success) {
          form.reset();
        }
        console.log(result);
        if (result.success) {
          signIn("credentials", {
            redirect: false,
            email: result.user.email,
            password: values.password,
          }).then((response) => {
            console.log(response);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // setFormResponse(response);
    // if (response.success) {
    //   form.reset();
    // }
  }

  return (
    <>
      {formResponse && (
        <Alert
          variant={formResponse.success ? "default" : "destructive"}
          className="mb-4"
        >
          <AlertTitle>{formResponse.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription>{formResponse.message}</AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter a password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Photo</FormLabel>
                <FormControl>
                  <Input placeholder="Profile photo URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
