import Card from "../../ui/Card/Card";

const ADDONS = [
  {
    label: "Online service",
    subText: "Access to multiplayer games",
    name: "onlineService",
    id: "onlineService",
    defaultChecked: true,
    monthly: 1,
    yearly: 10,
  },
  {
    label: "Larger storage",
    subText: "Extra 1TB of cloud save",
    name: "storage",
    id: "storage",
    defaultChecked: true,
    monthly: 2,
    yearly: 20,
  },
  {
    label: "Customizable profile",
    subText: "Custom theme on your profile",
    name: "customProfile",
    id: "customProfile",
    defaultChecked: false,
    monthly: 2,
    yearly: 20,
  },
];

export default function PickAddons({ isYearly }) {
  function handleAddon(e) {
    e.preventDefault();
  }

  return (
    <Card
      heading={"Pick add-ons"}
      para={"Add-ons help enhance your gaming experience."}
    >
      <form onSubmit={handleAddon} className="space-y-4" id="pickAddons">
        {ADDONS.map((field, index) => {
          return (
            <div className="plan-label-checkbox" key={`${field.id}-${index}`}>
              <input
                type="checkbox"
                name={field.name}
                id={field.id}
                defaultChecked={field.defaultChecked}
              />
              <label htmlFor={field.id} className="flex-grow">
                <p className="text-marine_blue font-primary_medium">
                  {field.label}
                </p>
                <p className="text-cool_gray text-xs">{field.subText}</p>
              </label>
              <small className="text-purplish_blue text-xs">
                +${isYearly ? field.yearly : field.monthly}/
                {isYearly ? "yr" : "mo"}
              </small>
            </div>
          );
        })}
      </form>
    </Card>
  );
}

PickAddons.defaultProps = {
  isYearly: true,
};
