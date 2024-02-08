export default function FormFooter({ activePage, handleBack, formId }) {
  function handleGoBack() {
    handleBack();
  }

  return (
    <div className="bg-white p-4 mt-auto flex justify-between lg:px-24 lg:pt-0 lg:pb-6">
      {activePage !== "1" ? (
        <button
          type="button"
          className="text-cool_gray font-primary_reg text-base hover:text-marine_blue"
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
        className={`ms-auto text-white font-primary_reg text-base px-4 py-2 lg:px-8 lg:py-4 rounded lg:rounded-lg ${
          activePage === "4"
            ? "bg-purplish_blue hover:bg-purplish_blue/80"
            : "bg-marine_blue hover:bg-marine_blue/80"
        }`}
        form={formId}
      >
        {activePage === "4" ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
