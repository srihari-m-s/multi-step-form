import FinishUp from "../FinishUp/FinishUp";
import PersonalPage from "../PersonalPage/PersonalPage";
import PickAddons from "../PickAddons/PickAddons";
import SelectPlan from "../SelectPlan/SelectPlan";

const FORMS = {
  1: <PersonalPage />,
  2: <SelectPlan />,
  3: <PickAddons />,
  4: <FinishUp />,
};

export default function FormPage({ activePage }) {
  return (
    <div className="relative h-[calc(100dvh-172px)] bg-magnolia flex flex-col">
      <div className="bg-white shadow-lg absolute left-0 right-0 -top-[73px] mx-4 rounded-xl px-6 py-8">
        {FORMS[activePage]}
      </div>
      <div className="bg-white p-4 mt-auto flex justify-between">
        {activePage !== 1 ? (
          <button
            type="button"
            className="text-cool_gray font-primary_reg text-base"
          >
            Go Back
          </button>
        ) : (
          ""
        )}
        {/* Submit */}
        <button
          type="submit"
          className={`text-white font-primary_reg text-base px-4 py-2 rounded ${
            activePage === "4" ? "bg-purplish_blue" : "bg-marine_blue"
          }`}
        >
          {activePage === "4" ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
}
