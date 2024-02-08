import { useContext } from "react";
import Card from "../../ui/Card/Card";
import PersonalInput from "../PersonalInput/PersonalInput";
import { FormContext } from "../../../contexts/FormContext/FormProvider";
import { formActions } from "../../../contexts/FormContext/FormReducer";

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
  const { state, dispatch } = useContext(FormContext);

  function handlePersonalInfo(e) {
    e.preventDefault();

    if (e.target.checkValidity()) {
      const data = new FormData(e.currentTarget);
      const formData = Object.fromEntries(data);

      dispatch({
        type: formActions.UPDATE,
        payload: formData,
      });
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
          return (
            <PersonalInput
              key={`${field.id}-${index}`}
              field={field}
              defaultValue={state[field.name]}
            />
          );
        })}
      </form>
    </Card>
  );
}
