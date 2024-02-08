import { useState } from "react";

export default function PersonalInput({ field }) {
  const [invalid, setInvalid] = useState(false);

  function handleInvalid() {
    setInvalid(true);
  }

  function handleChange() {
    setInvalid(false);
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label
          htmlFor={`personal_${field.id}`}
          className="text-sm text-marine_blue"
        >
          {field.label}
        </label>
        {invalid ? (
          <p className="text-strawberry text-sm font-primary_bold">
            This field is required
          </p>
        ) : (
          ""
        )}
      </div>
      <input
        type={field.type}
        id={`personal_${field.id}`}
        name={field.name}
        placeholder={`e.g. ${field.placeholder}`}
        className={`w-full outline-none border ${
          invalid ? "border-strawberry" : "border-neutral-300"
        } rounded-[4px] py-2 px-4 font-primary_bold text-marine_blue focus:border-purplish_blue placeholder:font-primary_bold placeholder:text-cool_gray`}
        required
        onInvalid={handleInvalid}
        onChange={handleChange}
      />
    </div>
  );
}
