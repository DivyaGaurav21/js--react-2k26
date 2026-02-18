

// MULTI STEP FORM

import React, { useState } from "react";

let initalState = {
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    loanType: "",
    loanAmount: "",
    annualIncome: ""
  }

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initalState)

  const fieldChangeHandler = (e) => {
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
    console.log(formData, "xx")
    setFormData(initalState);
  }

  return (
    <section className="max-w-sm">

      <div>

        <form onSubmit={formSubmitHandler}>
          {step === 1 && (
            <div className="flex flex-col gap-2">
              <input
                name="firstName"
                type="text"
                placeholder="first name"
                value={formData.firstName}
                onChange={fieldChangeHandler}
              />
              <input
                name="lastName"
                type="text"
                placeholder="last name"
                value={formData.lastName}
                onChange={fieldChangeHandler}
              />
              <input
                name="dob"
                type="date"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={fieldChangeHandler}
              />
              <button className="btn" onClick={() => setStep(step => step + 1)}>next</button>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-2">
              <input
                name="phone"
                type="text"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={fieldChangeHandler}
              />
              <input
                name="email"
                type="text"
                placeholder="abc...@gmail.com"
                value={formData.email}
                onChange={fieldChangeHandler}
              />
              <textarea
                name="address"
                placeholder="your Address"
                value={formData.address}
                onChange={fieldChangeHandler}
              />
              <div className="flex flex-row justify-between">
                <button className="btn" onClick={() => setStep(step => step - 1)}>prev</button>
                <button className="btn" onClick={() => setStep(step => step + 1)}>next</button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col gap-2">
              <select
                name="loanType"
                placeholder="Loan Amount"
                value={formData.loanType}
                onChange={fieldChangeHandler}
              >
                <option value="">select loan type</option>
                <option value="car">car loan</option>
                <option value="home">Home loan</option>
              </select>
              <input
                name="loanAmount"
                type="number"
                placeholder="Loan Amount"
                value={formData.loanAmount}
                onChange={fieldChangeHandler}
              />
              <input
                name="annualIncome"
                type="number"
                placeholder="Annual Income"
                value={formData.annualIncome}
                onChange={fieldChangeHandler}
              />
              <div className="flex flex-row justify-between">
                <button className="btn" onClick={() => setStep(step => step - 1)}>prev</button>
                <button className="btn" type="submit">Submit</button>
              </div>
            </div>
          )}
        </form>

      </div>

    </section>
  );
};

export default MultiStepForm;

