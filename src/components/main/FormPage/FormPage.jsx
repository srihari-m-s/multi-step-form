import FinishUp from "../FinishUp/FinishUp";
import FormFooter from "../FormFooter/FormFooter";
import PersonalPage from "../PersonalPage/PersonalPage";
import PickAddons from "../PickAddons/PickAddons";
import SelectPlan from "../SelectPlan/SelectPlan";

export default function FormPage({
  activePage,
  handleNext,
  handleBack,
  handleChange,
}) {
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
    4: {
      element: <FinishUp handleChange={handleChange} />,
      formId: "finishUp",
    },
  };

  return (
    <div className="relative h-[calc(100dvh-172px)] bg-magnolia flex flex-col lg:bg-white lg:h-full lg:min-w-[635px]">
      <div className="bg-white shadow-lg absolute left-0 right-0 -top-[73px] mx-4 rounded-xl px-6 py-8 lg:static lg:shadow-none lg:mx-0 lg:px-24">
        {FORMS[activePage].element}
      </div>
      <FormFooter
        activePage={activePage}
        handleBack={handleBack}
        formId={FORMS[activePage].formId}
      />
    </div>
  );
}
