import "./SelectPlan.css";
import { ArcadeIcon, AdvancedIcon, ProIcon } from "../../../assets/images";
import Switch from "../../ui/Switch/Switch";
import { useContext, useState } from "react";
import Card from "../../ui/Card/Card";
import { FormContext } from "../../../contexts/FormContext/FormProvider";
import { formActions } from "../../../contexts/FormContext/FormReducer";

const PLANS = [
  {
    label: "Arcade",
    monthly: 9,
    yearly: 90,
    icon: ArcadeIcon,
    defaultChecked: true,
  },
  {
    label: "Advanced",
    monthly: 12,
    yearly: 120,
    icon: AdvancedIcon,
    defaultChecked: false,
  },
  {
    label: "Pro",
    monthly: 15,
    yearly: 150,
    icon: ProIcon,
    defaultChecked: false,
  },
];

export default function SelectPlan({ handleNext }) {
  const { isYearly, dispatch } = useContext(FormContext);
  // local states
  const [localYearly, setLocalYearly] = useState(() => isYearly);

  function handleSelectPlan(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data);

    formData.isYearly = formData.get("isYearly") === "on" ? true : false;

    console.log(formData, data);

    dispatch({
      type: formActions.UPDATE,
      payload: formData,
    });

    handleNext();
  }

  return (
    <Card
      onSubmit={handleSelectPlan}
      heading={"Select your plan"}
      para={"You have the option of monthly or yearly billing."}
    >
      <form onSubmit={handleSelectPlan} className="space-y-4" id="selectPlan">
        <div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0">
          {PLANS.map((plan, index) => {
            return (
              <div className="plan-label" key={`${plan.label}-${index}`}>
                <label
                  htmlFor={`plan-${plan.label}`}
                  className="inline-flex items-center gap-4 p-4 w-full cursor-pointer lg:flex-col lg:items-start"
                >
                  <span className="self-start">
                    <img src={plan.icon} alt={plan.label} />
                  </span>
                  <div className="grid">
                    <p className="text-marine_blue font-primary_medium text-lg">
                      {plan.label}
                    </p>
                    <small className="text-sm text-cool_gray">
                      ${plan.monthly}/{localYearly ? "yr" : "mo"}
                    </small>
                    {localYearly ? (
                      <small className="text-xs text-marine_blue mt-1">
                        2 months free
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <input
                    type="radio"
                    id={`plan-${plan.label}`}
                    name="plan"
                    value={plan.label}
                    className="invisible"
                    defaultChecked={plan.defaultChecked}
                  />
                </label>
              </div>
            );
          })}
        </div>
        {/* Switch */}
        <div className="p-4 bg-alabaster inline-flex items-center justify-around rounded-lg gap-4 w-full">
          <p
            className={`${
              !localYearly ? "text-marine_blue" : "text-cool_gray"
            }`}
          >
            Monthly
          </p>
          <Switch setIsYearly={setLocalYearly} />
          <p
            className={`${localYearly ? "text-marine_blue" : "text-cool_gray"}`}
          >
            Yearly
          </p>
        </div>
      </form>
    </Card>
  );
}
