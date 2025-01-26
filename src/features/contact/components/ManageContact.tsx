import { getContactMessage } from "../server/data/getContactMessage";
import styles from "../styles/manageContact.module.css";
const ManageContact = async () => {
  const contactMessages = await getContactMessage();
  return (
    <section>
      <h1 className={styles.title}>Contact Messages</h1>
      <div className={styles.messageContainer}>
        <div className={styles.messageHead}>
          <p>Name</p>
          <p>Message</p>
          <p>Email</p>
          <p>Date & Time</p>
        </div>

        {contactMessages &&
          contactMessages?.data?.map((message) => {
            return (
              <div key={message._id} className={styles.message}>
                <p>
                  {message.firstName} {message.lastName}
                </p>
                <p>{message.message}</p>
                <p>{message.email}</p>
                <p>{new Date(message.createdAt).toLocaleString()}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ManageContact;
