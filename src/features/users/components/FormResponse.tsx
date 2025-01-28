import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FormResponseProps } from "../types/user.type";
import styles from "../styles/formResponse.module.css";

const FormResponse = ({ formResponse }: FormResponseProps) => {
  return (
    <>
      <Alert
        variant={formResponse.success ? "default" : "destructive"}
        className={styles.alertContainer}
      >
        <AlertTitle>{formResponse.success ? "Success" : "Error"}</AlertTitle>
        <AlertDescription>{formResponse.message}</AlertDescription>
      </Alert>
    </>
  );
};

export default FormResponse;
