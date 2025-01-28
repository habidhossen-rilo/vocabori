import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SubmitButton from "@/components/shared/SubmitButton/SubmitButton";
import { updateLesson } from "../../server/actions/lesson.action";
import { Edit } from "lucide-react";

const formSchema = z.object({
  lesson_name: z.string({ required_error: "Lesson name is required" }),
});

type EditLessonModalProps = {
  lesson: { id: string; lesson_name: string };
};

const EditLessonModal: React.FC<EditLessonModalProps> = ({ lesson }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formState, setFormState] = useState({ pending: false });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lesson_name: lesson.lesson_name, // Pre-fill the lesson name
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setFormState({ pending: true });

    const response = await updateLesson(lesson.id, values);

    if (response?.success) {
      toast.success("Lesson updated successfully");
      setFormState({ pending: false });
      setIsDialogOpen(false);
    } else {
      toast.error(response?.message || "Failed to update lesson");
      setFormState({ pending: false });
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      {/* Wrap the DialogTrigger with an explicit click handler */}
      <DialogTrigger asChild>
        <Button
          className="text-blue-500"
          variant="ghost"
          onClick={() => setIsDialogOpen(true)}
        >
          <Edit /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Lesson</DialogTitle>
        </DialogHeader>
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
            <DialogFooter>
              <SubmitButton pending={formState.pending} name="Save Changes" />
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditLessonModal;
