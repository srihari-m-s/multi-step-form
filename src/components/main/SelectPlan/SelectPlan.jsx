import "./SelectPlan.css";
import { ArcadeIcon, AdvancedIcon, ProIcon } from "../../../assets/images";
import Switch from "../../ui/Switch/Switch";
import { useState } from "react";
import Card from "../../ui/Card/Card";

const PLANS = [
  {
    label: "Arcade",
    monthly: 9,
    yearly: 90,
    icon: ArcadeIcon,
  },
  {
    label: "Advanced",
    monthly: 12,
    yearly: 120,
    icon: AdvancedIcon,
  },
  {
    label: "Pro",
    monthly: 15,
    yearly: 150,
    icon: ProIcon,
  },
];

export default function SelectPlan() {
  // local states
  const [isYearly, setIsYearly] = useState(false);

  function handleSelectPlan(e) {
    e.preventDefault();
  }

  return (
    <Card
      onSubmit={handleSelectPlan}
      heading={"Select your plan"}
      para={"You have the option of monthly or yearly billing."}
    >
      <form onSubmit={handleSelectPlan} className="space-y-4" id="selectPlan">
        {PLANS.map((plan, index) => {
          return (
            <div className="plan-label" key={`${plan.label}-${index}`}>
              <label
                htmlFor={`plan-${plan.label}`}
                className="inline-flex items-center gap-4 p-4 w-full cursor-pointer"
              >
                <span className="self-start">
                  <img src={plan.icon} alt={plan.label} />
                </span>
                <div className="grid">
                  <p className="text-marine_blue font-primary_medium text-lg">
                    {plan.label}
                  </p>
                  <small className="text-sm text-cool_gray">
                    ${plan.monthly}/{isYearly ? "yr" : "mo"}
                  </small>
                  {isYearly ? (
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
                  className="invisible"
                />
              </label>
            </div>
          );
        })}
        {/* Switch */}
        <div className="p-4 bg-alabaster inline-flex items-center justify-around rounded-lg gap-4 w-full">
          <p className={`${!isYearly ? "text-marine_blue" : "text-cool_gray"}`}>
            Monthly
          </p>
          <Switch setIsYearly={setIsYearly} />
          <p className={`${isYearly ? "text-marine_blue" : "text-cool_gray"}`}>
            Yearly
          </p>
        </div>
      </form>
    </Card>
  );
}
