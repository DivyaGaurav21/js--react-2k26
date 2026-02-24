import React from "react";

const Intrest = ({ formData, setFormData }) => {
  const handleSelectChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        intrest: [...prev.intrest, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        intrest: prev.intrest.filter((item) => item != value),
      }));
    }
  };

  const handleInterestChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Intrest</h2>
      <br />
      {/* select input  */}
      <h4>Intrests</h4>
      <label>yoga</label>
      <input
        type="checkbox"
        value="yoga"
        checked={formData.intrest.includes("yoga")}
        onChange={handleSelectChange}
      />
      <br />
      <label>Gym</label>
      <input
        type="checkbox"
        value="gym"
        checked={formData.intrest.includes("gym")}
        onChange={handleSelectChange}
      />
      <br />
      <label>Gender</label>
      <input
        type="checkbox"
        value="running"
        checked={formData.intrest.includes("running")}
        onChange={handleSelectChange}
      />
      <br />
      {/* radio input  */}
      <h4>Gender</h4>
      <label> Male </label>
      <input
        type="radio"
        value="male"
        name="gender"
        checked={formData.gender === "male"}
        onChange={handleInterestChange}
      />
      <label> Female </label>
      <input
        type="radio"
        value="female"
        name="gender"
        checked={formData.gender === "female"}
        onChange={handleInterestChange}
      />
      <label> Others </label>
      <input
        type="radio"
        value="others"
        name="gender"
        checked={formData.gender === "others"}
        onChange={handleInterestChange}
      />
      {/* select profession  */}
      <h4>Select Profession</h4>
      <select
        name="profession"
        value={formData.profession}
        onChange={handleInterestChange}
      >
        <option value="">select profession</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="staff">Staff</option>
      </select>
      <br />
    </div>
  );
};

export default Intrest;
