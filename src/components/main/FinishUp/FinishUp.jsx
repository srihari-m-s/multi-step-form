import Card from "../../ui/Card/Card";

export default function FinishUp({ isYearly, handleChange }) {
  function handleFinish(e) {
    e.preventDefault();
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
                Arcade ({isYearly ? "monthly" : "yearly"})
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
              ${9}/{isYearly ? "mo" : "yr"}
            </p>
          </div>
          {/* break */}
          <hr className="my-4" />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-cool_gray">Online service</p>
              <p className="text-marine_blue">
                +${0}/{isYearly ? "mo" : "yr"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-cool_gray">Larger Storage</p>
              <p className="text-marine_blue">
                +${0}/{isYearly ? "mo" : "yr"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <p className="text-cool_gray text-sm">Total (per month)</p>
          <p className="text-purplish_blue font-primary_bold text-base">
            +${0}/{isYearly ? "mo" : "yr"}
          </p>
        </div>
      </form>
    </Card>
  );
}

FinishUp.defaultProps = {
  isYearly: false,
};
