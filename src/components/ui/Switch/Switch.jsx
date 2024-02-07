import "./Switch.css";

export default function Switch({ setIsYearly }) {
  function handleSwitchClick(e) {
    setIsYearly(e.target.checked);
  }

  return (
    <label className="switch" onClick={handleSwitchClick}>
      <input type="checkbox" name="isYearly" />
      <span className="slider round"></span>
    </label>
  );
}
