//CREATE FORM VALIDATION

// import React, { useState } from "react";

// const FormValidation = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const [error, setError] = useState({
//     nameError: "",
//     emailError: "",
//     passwordError: ""
//   })

//   console.log(formData, error)

//   const validateMessage = (field, value) => {
//     let message = "";

//     if (field == "name") {
//       if (!value.trim()) {
//         message = "user name is required"
//       }
//     }
//     if (field == "email") {
//       if (!value) {
//         message = "password is required"
//       } else if (!/\S+@\S+\.\S+/.test(value)) {
//         message = "password is invalid"
//       }
//     }
//     if (field == "password") {
//       if (!value) {
//         message = "password is required"
//       } else if (value.length < 5) {
//         message = "password must be 6 character"
//       }
//     }
//     return message;
//   }

// const handleNameChange = (e) => {
//   setFormData(prev => (
//     {
//       ...prev,
//       name: e.target.value
//     }
//   ))
//   setError(prev => (
//     {
//       ...prev,
//       nameError: validateMessage("name", e.target.value)
//     }
//   ))
// }
// const handleEmailChange = (e) => {
//   setFormData(prev => (
//     {
//       ...prev,
//       email: e.target.value
//     }
//   ))
//   setError(prev => (
//     {
//       ...prev,
//       emailError: validateMessage("email", e.target.value)
//     }
//   ))
// }

// const handlePasswordChange = (e) => {
//   setFormData(prev => (
//     {
//       ...prev,
//       password: e.target.value
//     }
//   ))
//   setError(prev => (
//     {
//       ...prev,
//       passwordError: validateMessage("password", e.target.value)
//     }
//   ))

// }

// const formSubmitHandler = (e) => {
//   e.preventDefault();

//   const nameError = validateMessage("name", formData.name);
//   const emailError = validateMessage("email", formData.email);
//   const passwordError = validateMessage("password", formData.password);

//   setError({
//     nameError,
//     emailError,
//     passwordError,
//   });

//   if (!nameError && !emailError && !passwordError) {
//     alert("Form submitted successfully!");
//     console.log(formData);
//   }
// }

// return (
//   <section>
//     <h1 className="text-green-700 text-2xl mb-2">FormValidation</h1>
//     <form className="flex flex-col gap-2" onSubmit={formSubmitHandler}>
//       <input
//         type="text"
//         placeholder="Enter name"
//         value={formData.name}
//         onChange={handleNameChange}
//       />
//       <p className="text-red-500">{error.nameError}</p>
//       <input
//         type="email"
//         placeholder="Enter your Email"
//         value={formData.email}
//         onChange={handleEmailChange}
//       />
//       <p className="text-red-500">{error.emailError}</p>
//       <input
//         type="password"
//         placeholder="Enter Password"
//         value={formData.password}
//         onChange={handlePasswordChange}
//       />
//       <p className="text-red-500">{error.passwordError}</p>
//       <button className="btn" type="submit">Submit</button>
//     </form>
//   </section>
// );
//   };

// export default FormValidation;


// -----------------------------------

import React from "react";

const FormValidation = () => {
  return <div>FormValidation</div>;
};

export default FormValidation;





