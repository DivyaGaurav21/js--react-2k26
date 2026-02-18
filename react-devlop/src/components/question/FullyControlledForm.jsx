// import React, { useState } from "react";

// const FullyControlledForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const formSubmitHandler = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert("password and confirmPassword is not same")
//             return;
//         }
//         console.log(name, email , password , "wwqwq")
//     }

//     return <section>
//         <form className="flex flex-col gap-2" onSubmit={formSubmitHandler}>
//             <input
//                 placeholder="Enter Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 placeholder="Enter Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 placeholder="Enter Your PassWord"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <input
//                 placeholder="Enter Your Name"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//             />
//             <button className="btn max-w-40" type="submit">Register Now</button>
//         </form>
//     </section>;
// };

// export default FullyControlledForm;




// --------------------------------------------------

import React, { useState } from "react";

const FullyControlledForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onInputChange = (e) => {
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
        if (formData.password != formData.confirmPassword) {
            alert("password and confirm password is not matching");
            return;
        }
        console.log(formData)
    }

    return <div className="border border-black p-5">
        <form onSubmit={formSubmitHandler} className="flex flex-col gap-2 m-auto">
            <input
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={onInputChange}
            />
            <input
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={onInputChange}
            />
            <input
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={onInputChange}
            />
            <input
                name="confirmPassword"
                placeholder="Enter ConfirmPassword"
                value={formData.confirmPassword}
                onChange={onInputChange}
            />
            <button className="btn max-w-50">Register Now</button>
        </form>
    </div>;
};

export default FullyControlledForm;

