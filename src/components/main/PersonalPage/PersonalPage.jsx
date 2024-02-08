import Card from "../../ui/Card/Card";
import PersonalInput from "../PersonalInput/PersonalInput";

const PERSONAL_INFO = [
  {
    name: "name",
    label: "Name",
    id: "name",
    type: "text",
    placeholder: "Bruce Wayne",
  },
  {
    name: "email",
    label: "Email Address",
    id: "email",
    type: "email",
    placeholder: "wayne@example.com",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    id: "phoneNumber",
    type: "tel",
    placeholder: "+1 234 567 890",
  },
];

export default function PersonalPage({ handleNext }) {
  function handlePersonalInfo(e) {
    e.preventDefault();

    if (e.target.checkValidity()) {
      handleNext();
    }
  }

  return (
    <Card
      heading={"Personal Info"}
      para={"Please provide your name, email address, and phone number."}
    >
      <form
        onSubmit={handlePersonalInfo}
        className="space-y-4"
        id="personalPage"
        noValidate
      >
        {PERSONAL_INFO.map((field, index) => {
          return <PersonalInput key={`${field.id}-${index}`} field={field} />;
        })}
      </form>
    </Card>
  );
}
