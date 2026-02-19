// import React, { useState } from "react";

// const Modal = ({ setIsOpen }) => {

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });

//     const [error, setError] = useState("");

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.password !== formData.confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         console.log(formData);
//         alert("Form Submitted Successfully");

//         setError("");
//         setIsOpen(false);
//         setFormData({
//             name: "",
//             email: "",
//             password: "",
//             confirmPassword: "",
//         });
//     };


//     return (
//           <div className="absolute inset-0 flex justify-center items-center bg-gray-700">
//             <div className="bg-white p-6 rounded shadow w-96 relative">

//                 {/* Close Button */}
//                 <button
//                     onClick={() => setIsOpen(false)}
//                     className="absolute top-2 right-2 text-red-500"
//                 >
//                     ✕
//                 </button>

//                 <h2 className="text-xl font-bold mb-4 text-center">
//                     Register
//                 </h2>

//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         className="border w-full p-2 mb-3"
//                         value={formData.name}
//                         onChange={handleChange}
//                     />

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         className="border w-full p-2 mb-3"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         className="border w-full p-2 mb-3"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />

//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         className="border w-full p-2 mb-2"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                     />

//                     {error && (
//                         <p className="text-red-500 text-sm mb-2">
//                             {error}
//                         </p>
//                     )}

//                     <button
//                         type="submit"
//                         className="bg-green-500 text-white w-full py-2 rounded"
//                     >
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
      

// };

// export default Modal;

// -------------

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-96 p-6 rounded-lg shadow-lg z-10">
        
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;

