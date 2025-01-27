import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmitButton from "@/components/shared/SubmitButton/SubmitButton";
import { Lesson } from "@/features/lessons/types/lesson";
import { createVocabulary } from "../../server/actions/vocabulary.action";

const formSchema = z.object({
  word: z.string().min(1, "Word is required"),
  english_word: z.string().min(1, "English word is required"),
  pronunciation: z.string().min(1, "Pronunciation is required"),
  use: z.string().min(1, "Use is required"),
  lesson_id: z.string().min(1, "Lesson is required"),
});

type AddVocabularyFormProps = {
  lessons?: {
    data: Lesson;
    success: boolean;
    message: string;
  };
};

const AddVocabularyModal = ({ lessons }: AddVocabularyFormProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const session = useSession();
  const [formState, setFormState] = useState({ pending: false });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: "",
      english_word: "",
      pronunciation: "",
      use: "",
      lesson_id: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormState({ pending: true });
    const adminId: string | undefined = session.data?.user?._id;
    if (!adminId) return toast.error("Admin ID not found");
    console.log(adminId, "Admin ID");
    const { word, english_word, pronunciation, use, lesson_id } = values;
    createVocabulary({
      word,
      english_word,
      pronunciation,
      use,
      lesson_id,
      admin_id: adminId,
    }).then((res) => {
      if (res?.success) {
        toast.success(res.message);
        setFormState({ pending: false });
        setIsDialogOpen(false);
        form.reset();
      } else if (!res?.success) {
        toast.error(res?.message);
        setFormState({ pending: false });
      }
    });
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Vocabulary</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Vocabulary</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="word"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Word</FormLabel>
                  <FormControl>
                    <Input placeholder="Word" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="english_word"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>English Word</FormLabel>
                  <FormControl>
                    <Input placeholder="English Word" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pronunciation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pronunciation</FormLabel>
                  <FormControl>
                    <Input placeholder="Pronunciation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="use"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Usecase</FormLabel>
                  <FormControl>
                    <Input placeholder="Usecase" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lesson_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select a lesson</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a lesson" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {lessons.map((lesson: Lesson) => (
                        <SelectItem key={lesson._id} value={lesson._id}>
                          {lesson.lesson_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton pending={formState.pending} name={"Add Vocabulary"} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddVocabularyModal;
