"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import styles from "../styles/user.module.css";
import { Status } from "../types/user.type";
import FormResponse from "./FormResponse";
import SubmitIcon from "./SubmitIcon";

export default function LoginForm() {
  const router = useRouter();
  const [loader, setLoader] = useState<Status>("success");
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
  function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoader("pending");
    loginUser(values)
      .then((response) => {
        if (response) {
          if (response.success) {
            setFormResponse(response);
            setLoader("success");
            router.push("/lessons");
          } else {
            setLoader("error");
            setFormResponse(response);
          }
        }
      })
      .catch((error) => {
        setLoader("error");
        setFormResponse({
          success: false,
          message: error.message,
        });
      });
  }

  return (
    <>
      {formResponse && <FormResponse formResponse={formResponse} />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles.loginForm}
        >
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
            <Button className={styles.loadingBtn} disabled>
              Loading <span className={styles.spinner}>⏳</span>
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Submit <SubmitIcon />
            </Button>
          )}
        </form>
      </Form>
    </>
  );
}
