"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { createLesson } from "../server/actions/lesson.action";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useState } from "react";
import SubmitButton from "@/components/shared/SubmitButton/SubmitButton";

const formSchema = z.object({
  lesson_name: z.string({ required_error: "Lesson name is required" }),
});

const AddLessonForm = () => {
  const session = useSession();
  const [formState, setFormState] = useState({ pending: false });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lesson_name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormState({ pending: true });
    const adminId: string | undefined = session.data?.user?._id;
    if (!adminId) return toast.error("Admin ID not found");
    createLesson({
      lesson_name: values.lesson_name,
      admin_id: adminId,
    }).then((res) => {
      if (res?.success) {
        toast.success(res.message);
        setFormState({ pending: false });
        form.reset();
      } else if (!res?.success) {
        toast.error(res?.message);
        setFormState({ pending: false });
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="lesson_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lesson Name</FormLabel>
              <FormControl>
                <Input placeholder="Lesson Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton pending={formState.pending} name={"Add Lesson"} />
      </form>
    </Form>
  );
};

export default AddLessonForm;
