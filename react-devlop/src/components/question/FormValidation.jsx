import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const validate = () => {
    let newErrors = {
      nameError: "",
      emailError: "",
      passwordError: "",
    };

    if (!formData.name.trim()) {
      newErrors.nameError = "Name is required";
    }

    if (!formData.email) {
      newErrors.emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.emailError = "Email is not valid";
    }

    if (!formData.password) {
      newErrors.passwordError = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.passwordError =
        "Password must be at least 6 characters";
    }

    setError(newErrors);

    return (
      !newErrors.nameError &&
      !newErrors.emailError &&
      !newErrors.passwordError
    );
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <section>
      <form className="flex flex-col gap-4" onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        {error.nameError && (
          <p className="text-red-400">{error.nameError}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {error.emailError && (
          <p className="text-red-400">{error.emailError}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {error.passwordError && (
          <p className="text-red-400">{error.passwordError}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FormValidation;
