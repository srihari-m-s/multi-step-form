import { useContext } from "react";
import "./Switch.css";
import { FormContext } from "../../../contexts/FormContext/FormProvider";

export default function Switch({ setIsYearly }) {
  const { isYearly } = useContext(FormContext);

  function handleSwitchClick(e) {
    setIsYearly(e.target.checked);
  }

  return (
    <label className="switch" onClick={handleSwitchClick}>
      <input type="checkbox" name="isYearly" defaultChecked={isYearly} />
      <span className="slider round"></span>
    </label>
  );
}
