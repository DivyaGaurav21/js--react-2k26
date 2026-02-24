import React from "react";

const Profile = ({ formData, setFormData, error }) => {
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(error, "err")

  return (
    <div>
      <h2>User Profile</h2>
      <br/>
      <label>Enter Name : </label>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={inputChangeHandler}
        className="inp"
      />
      {error.name && <span>{error.name}</span>}
      <br />
      <label>Enter Age : </label>
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={inputChangeHandler}
        className="inp"
      />
       {error.age && <span>{error.age}</span>}
      <br />
      <label>Enter email : </label>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={inputChangeHandler}
        className="inp"
      />
       {error.email && <span>{error.email}</span>}
      <br />
      <label>Enter DOB : </label>
      <input
        name="dob"
        type="date"
        value={formData.dob}
        onChange={inputChangeHandler}
        className="inp"
      />
      <br />
    </div>
  );
};

export default Profile;
