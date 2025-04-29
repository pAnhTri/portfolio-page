interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmailTemplate = ({
  name,
  email,
  message,
}: ContactEmailTemplateProps) => {
  return (
    <div>
      <h1>{name} sent you a message</h1>
      <p>Message:</p>
      <br />
      <p>{message}</p>
      <br />
      <p>You can reply to this email directly at {email}!</p>
    </div>
  );
};

export default ContactEmailTemplate;
