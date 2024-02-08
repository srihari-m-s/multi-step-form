export default function FormFooter({ activePage, handleBack, formId }) {
  function handleGoBack() {
    handleBack();
  }

  return (
    <div className="bg-white p-4 mt-auto flex justify-between lg:px-24 lg:py-0">
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
        className={`ms-auto text-white font-primary_reg text-base px-4 py-2 rounded ${
          activePage === "4" ? "bg-purplish_blue" : "bg-marine_blue"
        }`}
        form={formId}
      >
        {activePage === "4" ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
