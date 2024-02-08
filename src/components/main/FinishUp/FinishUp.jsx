import { useContext } from "react";
import Card from "../../ui/Card/Card";
import { FormContext } from "../../../contexts/FormContext/FormProvider";

export default function FinishUp({ handleChange, handleConfirm }) {
  const { state, Prices } = useContext(FormContext);

  let totalAmount = state.isYearly
    ? Prices.yearly[state.plan] +
      (state.onlineService && Prices.yearly.onlineService) +
      (state.storage && Prices.yearly.storage) +
      (state.customProfile && Prices.yearly.customProfile)
    : Prices.monthly[state.plan] +
      (state.onlineService && Prices.monthly.onlineService) +
      (state.storage && Prices.monthly.storage) +
      (state.customProfile && Prices.monthly.customProfile);

  function handleFinish(e) {
    e.preventDefault();

    const formData = { ...state };
    formData.totalAmount = totalAmount;

    const response = window.confirm(JSON.stringify(formData, null, 2));
    if (response) {
      handleConfirm();
    }
  }

  function handleChangeClick() {
    handleChange();
  }

  return (
    <Card
      heading={"Finishing Up"}
      para={"Double-check everything looks OK before confirming."}
    >
      <form onSubmit={handleFinish} className="space-y-4" id="finishUp">
        <div className="bg-alabaster p-4 text-sm rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-marine_blue">
                Arcade ({state.isYearly ? "monthly" : "yearly"})
              </h4>
              <p
                tabIndex={0}
                className="text-cool_gray underline hover:text-purplish_blue cursor-pointer"
                onClick={handleChangeClick}
              >
                Change
              </p>
            </div>
            <p className="font-primary_bold text-marine_blue">
              $
              {state.isYearly
                ? Prices.yearly[state.plan]
                : Prices.monthly[state.plan]}
              /{state.isYearly ? "yr" : "mo"}
            </p>
          </div>
          {/* break */}
          <hr className="my-4" />

          {/* Add-ons */}
          <div className="space-y-4">
            {/* Online Service */}
            {state.onlineService ? (
              <div className="flex items-center justify-between">
                <p className="text-cool_gray">Online service</p>
                <p className="text-marine_blue">
                  +$
                  {state.isYearly
                    ? Prices.yearly.onlineService
                    : Prices.monthly.onlineService}
                  /{state.isYearly ? "yr" : "mo"}
                </p>
              </div>
            ) : (
              ""
            )}

            {/* Larger Storage */}
            {state.storage ? (
              <div className="flex items-center justify-between">
                <p className="text-cool_gray">Larger storage</p>
                <p className="text-marine_blue">
                  +$
                  {state.isYearly
                    ? Prices.yearly.storage
                    : Prices.monthly.storage}
                  /{state.isYearly ? "yr" : "mo"}
                </p>
              </div>
            ) : (
              ""
            )}

            {/* Customizable Profile */}
            {state.customProfile ? (
              <div className="flex items-center justify-between">
                <p className="text-cool_gray">Customizable Profile</p>
                <p className="text-marine_blue">
                  +$
                  {state.isYearly
                    ? Prices.yearly.customProfile
                    : Prices.monthly.customProfile}
                  /{state.isYearly ? "yr" : "mo"}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <p className="text-cool_gray text-sm">Total (per month)</p>
          <p className="text-purplish_blue font-primary_bold text-base">
            +${totalAmount}/{state.isYearly ? "yr" : "mo"}
          </p>
        </div>
      </form>
    </Card>
  );
}
