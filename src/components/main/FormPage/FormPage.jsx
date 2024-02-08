import FinishUp from "../FinishUp/FinishUp";
import PersonalPage from "../PersonalPage/PersonalPage";
import PickAddons from "../PickAddons/PickAddons";
import SelectPlan from "../SelectPlan/SelectPlan";

export default function FormPage({ activePage, handleNext, handleBack }) {
  const FORMS = {
    1: {
      element: <PersonalPage handleNext={handleNext} />,
      formId: "personalPage",
    },
    2: {
      element: <SelectPlan handleNext={handleNext} />,
      formId: "selectPlan",
    },
    3: {
      element: <PickAddons handleNext={handleNext} />,
      formId: "pickAddons",
    },
    4: { element: <FinishUp />, formId: "finishUp" },
  };

  function handleGoBack() {
    handleBack();
  }

  return (
    <div className="relative h-[calc(100dvh-172px)] bg-magnolia flex flex-col">
      <div className="bg-white shadow-lg absolute left-0 right-0 -top-[73px] mx-4 rounded-xl px-6 py-8">
        {FORMS[activePage].element}
      </div>
      <div className="bg-white p-4 mt-auto flex justify-between">
        {activePage !== "1" ? (
          <button
            type="button"
            className="text-cool_gray font-primary_reg text-base"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        ) : (
          ""
        )}
        {/* Submit */}
        <button
          type="submit"
          className={`ms-auto text-white font-primary_reg text-base px-4 py-2 rounded ${
            activePage === "4" ? "bg-purplish_blue" : "bg-marine_blue"
          }`}
          form={FORMS[activePage].formId}
        >
          {activePage === "4" ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
}
