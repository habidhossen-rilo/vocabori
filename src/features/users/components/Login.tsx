"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { loginSchema } from "../validation/loginValidation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginUser } from "../server/actions/login.action";
import { useRouter } from "next/navigation";

type Status = "pending" | "error" | "success";

export default function LoginForm() {
  const [formResponse, setFormResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const [loader, setLoader] = useState<Status>("success");
  function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoader("pending");
    loginUser(values)
      .then((response) => {
        console.log(response);
        if (response) {
          if (response.success) {
            setFormResponse(response);
            setLoader("success");
            router.push("/lessions");
          } else {
            setLoader("error");
            setFormResponse(response);
          }
        }
      })
      .catch((error) => {
        console.error(error);
        setLoader("error");
        setFormResponse({
          success: false,
          message: "An error occurred. Please try again later.",
        });
      });
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

          {loader === "pending" ? (
            <Button className="w-full disabled:opacity-50" disabled>
              Loading <span className="ml-2 animate-spin">⏳</span>
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Submit
            </Button>
          )}
        </form>
        {/* {loader === "error" && <p>{formResponse?.message}</p>} */}
      </Form>
    </>
  );
}
