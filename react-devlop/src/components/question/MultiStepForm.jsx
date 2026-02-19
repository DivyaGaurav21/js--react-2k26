// MULTI STEP FORM
import React, { useState } from "react";

const formInitialState = {
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  mobile: "",
  email: "",
  address: "",
  loanType: "",
  annualIncome: "",
  loanAmount: ""
}

const MultiStepForm = () => {
  const [formData, setFormData] = useState(formInitialState)
  const [step, setStep] = useState(1);

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("form submitted")
    setFormData(formInitialState);
  }

  const nextStepFirst = () => {
    if (!formData.firstName || !formData.lastName || !formData.dob || !formData.gender) {
      alert("please fill form")
      return;
    }
    setStep(step => step + 1)
  }

  return <section>
    <form onSubmit={formSubmitHandler}>
      {step === 1 && <>
        <p>Personam Detail Form</p>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={onFieldChange}
          placeholder="Enter First Name"
        />
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={onFieldChange}
          placeholder="Enter Last Name"
        />
        <input
          name="dob"
          type="date"
          value={formData.dob}
          onChange={onFieldChange}
          placeholder="Enter DOB"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={onFieldChange}
        >
          <option value="">select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button className="btn" type="button" onClick={nextStepFirst}>next</button>
      </>}
      {step === 2 && <>
        <p> Contact Detail Form</p>
        <input
          name="mobile"
          type="text"
          value={formData.mobile}
          onChange={onFieldChange}
          placeholder="Enter Mob No"
        />
        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={onFieldChange}
          placeholder="Enter Email"
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={onFieldChange}
          placeholder="Enter Your Address"
        />
        <div className="flex flex-row gap-1">
          <button className="btn" type="button" onClick={() => setStep(step => step - 1)}>prev</button>
          <button className="btn" type="button" onClick={() => setStep(step => step + 1)}>next</button>
        </div>
      </>}
      {step === 3 && <>
        <p>Loan Apply Form</p>
        <select
          name="loanType"
          value={formData.loanType}
          onChange={onFieldChange}
        >
          <option value="">Loan Type</option>
          <option value="car">Car</option>
          <option value="home">Home</option>
          <option value="personal">Personal</option>
        </select>
        <input
          name="annualIncome"
          type="number"
          value={formData.annualIncome}
          onChange={onFieldChange}
          placeholder="Your Annual Income"
        />
        <input
          name="loanAmount"
          type="number"
          value={formData.loanAmount}
          onChange={onFieldChange}
          placeholder="Enter Loan Amount"
        />
        <div>
          <button className="btn" type="button" onClick={() => setStep(step => step - 1)}>prev</button>
          <button className="btn" type="submit">Apply Loan</button>
        </div>
      </>}
    </form>
  </section>;
};

export default MultiStepForm;
