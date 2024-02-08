import { useContext } from "react";
import Card from "../../ui/Card/Card";
import { FormContext } from "../../../contexts/FormContext/FormProvider";
import { formActions } from "../../../contexts/FormContext/FormReducer";

const ADDONS = [
  {
    label: "Online service",
    subText: "Access to multiplayer games",
    name: "onlineService",
    id: "onlineService",
    defaultChecked: true,
  },
  {
    label: "Larger storage",
    subText: "Extra 1TB of cloud save",
    name: "storage",
    id: "storage",
    defaultChecked: true,
  },
  {
    label: "Customizable profile",
    subText: "Custom theme on your profile",
    name: "customProfile",
    id: "customProfile",
    defaultChecked: false,
  },
];

export default function PickAddons({ handleNext }) {
  const { Prices, state, dispatch } = useContext(FormContext);

  function handleAddon(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data);

    console.log(formData);

    formData.onlineService = data.get("onlineService") === "on" ? true : false;
    formData.storage = data.get("storage") === "on" ? true : false;
    formData.customProfile = data.get("customProfile") === "on" ? true : false;

    dispatch({
      type: formActions.UPDATE,
      payload: formData,
    });
    handleNext();
  }

  return (
    <Card
      heading={"Pick add-ons"}
      para={"Add-ons help enhance your gaming experience."}
    >
      <form onSubmit={handleAddon} className="space-y-4" id="pickAddons">
        {ADDONS.map((field, index) => {
          return (
            <div
              className="plan-label-checkbox cursor-pointer"
              key={`${field.id}-${index}`}
            >
              <input
                type="checkbox"
                name={field.name}
                id={field.id}
                defaultChecked={state[field.id]}
              />
              <label htmlFor={field.id} className="flex-grow cursor-pointer">
                <p className="text-marine_blue font-primary_medium">
                  {field.label}
                </p>
                <p className="text-cool_gray text-xs lg:text-sm">
                  {field.subText}
                </p>
              </label>
              <small className="text-purplish_blue text-xs lg:text-sm">
                +$
                {state.isYearly
                  ? Prices.yearly[field.id]
                  : Prices.monthly[field.id]}
                /{state.isYearly ? "yr" : "mo"}
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
