import React from "react";

const Setting = ({ formData, setFormData }) => {
  const themeChangeHandler = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        impSetting: [...prev.impSetting, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        impSetting: prev.impSetting.filter((item) => item != value),
      }));
    }
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h4>Setting</h4>
      <br />
      <h2>Theme Stting</h2>
      <br />
      <label>dark</label>
      <input
        name="theme"
        type="radio"
        value="dark"
        checked={formData.theme === "dark"}
        onChange={inputChange}
      />
      <label>light</label>
      <input
        name="theme"
        type="radio"
        value="light"
        checked={formData.theme === "light"}
        onChange={inputChange}
      />
      <br />
      <label>notificatin</label>
      <input
        type="checkbox"
        value="notification"
        checked={formData.impSetting.includes("notification")}
        onChange={themeChangeHandler}
      />
      <br />
      <label>sound</label>
      <input
        type="checkbox"
        value="sound"
        checked={formData.impSetting.includes("sound")}
        onChange={themeChangeHandler}
      />
      <br />
      <label>service</label>
      <input
        type="checkbox"
        value="service"
        checked={formData.impSetting.includes("service")}
        onChange={themeChangeHandler}
      />
    </div>
  );
};

export default Setting;
