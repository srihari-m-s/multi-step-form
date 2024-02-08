import { useState } from "react";
import FinishUp from "../FinishUp/FinishUp";
import FormFooter from "../FormFooter/FormFooter";
import PersonalPage from "../PersonalPage/PersonalPage";
import PickAddons from "../PickAddons/PickAddons";
import SelectPlan from "../SelectPlan/SelectPlan";
import Thankyou from "../Thankyou/Thankyou";

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
      element: (
        <FinishUp handleChange={handleChange} handleConfirm={handleConfirm} />
      ),
      formId: "finishUp",
    },
  };

  // local states
  const [confirmed, setConfirmed] = useState(false);

  function handleConfirm() {
    setConfirmed(true);
  }

  return (
    <div className="relative h-[calc(100dvh-172px)] bg-magnolia flex flex-col lg:bg-white lg:h-full lg:min-w-[635px]">
      <div className="bg-white shadow-lg absolute left-0 right-0 -top-[73px] mx-4 rounded-xl px-6 py-8 lg:static lg:shadow-none lg:mx-0 lg:px-24 lg:h-full">
        {confirmed ? (
          <div className="flex flex-col items-center justify-center h-full">
            <Thankyou />
          </div>
        ) : (
          FORMS[activePage].element
        )}
      </div>
      {!confirmed ? (
        <FormFooter
          activePage={activePage}
          handleBack={handleBack}
          formId={FORMS[activePage].formId}
        />
      ) : (
        ""
      )}
    </div>
  );
}
