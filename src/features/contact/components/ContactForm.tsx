import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import styles from "../styles/contactform.module.css";

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <Label htmlFor="first-name" className={styles.label}>
              First Name
            </Label>
            <Input
              type="text"
              id="first-name"
              placeholder="John"
              className={styles.input}
            />
          </div>

          <div className={styles.inputField}>
            <Label htmlFor="last-name" className={styles.label}>
              Last Name
            </Label>
            <Input
              type="text"
              id="last-name"
              placeholder="Doe"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputField}>
          <Label htmlFor="email" className={styles.label}>
            Email address
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="johndoe@example.com"
            className={styles.input}
          />
        </div>

        <div className={styles.inputField}>
          <Label htmlFor="message" className={styles.label}>
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Message"
            className={styles.textarea}
          />
        </div>

        <Button className={styles.button} type="submit">
          Send message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
