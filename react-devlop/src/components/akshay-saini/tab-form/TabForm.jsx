//FORM IN TAB (reuasability, modularity)
//PROFILE INPUT - 1 (name , email, dob , age) -- need validation
//INTREST INPUT -2 (3 intrest checked input, gender radio input , select profession)
//SETTING INPUT - 3 (dark/light theme radio, select checked notificatin | sound | service)

import React, { useState } from "react";
import Profile from "./Profile";
import Intrest from "./Intrest";
import Setting from "./Setting";

const TabForm = () => {
  let [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    age: "",
    gender: "",
    intrest: [],
    profession: "",
    theme: "",
    impSetting: [],
  });

  const [error, setError] = useState({});

  const profileValidation = () => {
    console.log("call");
    const err = {};
    if (!formData.name  || formData.name.length < 2) {
      err.name = "name is not valid | required";
    }
    if (!formData.age || formData.age < 18) {
      err.age = "age is less than 18 | required";
    }
    if (!formData.email || formData.email.length < 2) {
      err.email = "email required | not valid";
    }

    setError(err);

    return error.name || err.age || err.email;
  };

  const intrestValidation = () => {};

  const formConfig = [
    {
      tab: "profile",
      component: Profile,
      validate: profileValidation,
    },
    {
      tab: "intrest",
      component: Intrest,
      validate: intrestValidation,
    },
    {
      tab: "setting",
      component: Setting,
    },
  ];

  const handleFormSubmit = () => {
    console.log(formData, "qq");
  };

  const ActiveComponent = formConfig[activeTab].component;

  const handleNextTab = () => {
    if (!formConfig[activeTab].validate()) {
      setActiveTab((curr) => curr + 1);
    }
  };

  return (
    <div>
      <div className="tabs">
        {formConfig.map((config, index) => (
          <div key={config.tab}>
            <button
              className={index === activeTab ? "active-btn" : "bttn"}
              onClick={() => setActiveTab(index)}
            >
              {config.tab}
            </button>
          </div>
        ))}
      </div>
      <div className="active-tab">
        <ActiveComponent
          formData={formData}
          setFormData={setFormData}
          error={error}
        />
      </div>
      <button className={`bttn ${activeTab === 0 && "hidden"}`}>prev</button>
      <button
        className="bttn"
        onClick={activeTab === 2 ? handleFormSubmit : handleNextTab}
      >
        {activeTab === 2 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default TabForm;
