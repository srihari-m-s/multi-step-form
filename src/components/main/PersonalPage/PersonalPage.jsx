import Card from "../../ui/Card/Card";

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

export default function PersonalPage() {
  function handlePersonalInfo(e) {
    e.preventDefault();
  }

  return (
    <Card
      heading={"Personal Info"}
      para={"Please provide your name, email address, and phone number."}
    >
      <form onSubmit={handlePersonalInfo} className="space-y-4">
        {PERSONAL_INFO.map((field, index) => {
          return (
            <div className="space-y-1" key={`${field.id}-${index}`}>
              <label
                htmlFor={`personal_${field.id}`}
                className="text-sm text-marine_blue"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={`personal_${field.id}`}
                name={field.name}
                placeholder={`e.g. ${field.placeholder}`}
                className="w-full outline-none border border-neutral-300 rounded-[4px] py-2 px-4 font-primary_bold text-marine_blue focus:border-purplish_blue placeholder:font-primary_bold placeholder:text-cool_gray"
              />
            </div>
          );
        })}
      </form>
    </Card>
  );
}
