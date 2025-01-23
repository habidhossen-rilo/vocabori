import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FormResponseProps } from "../types/user.type";

const FormResponse = ({ formResponse }: FormResponseProps) => {
  return (
    <>
      <Alert
        variant={formResponse.success ? "default" : "destructive"}
        className="mx-auto mb-4 max-w-md"
      >
        <AlertTitle>{formResponse.success ? "Success" : "Error"}</AlertTitle>
        <AlertDescription>{formResponse.message}</AlertDescription>
      </Alert>
    </>
  );
};

export default FormResponse;
