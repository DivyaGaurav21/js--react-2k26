// import React, { forwardRef } from "react";

// const ReusableInput = forwardRef(
//   (
//     {
//       label,
//       type = "text",
//       placeholder = "",
//       value,
//       onChange,
//       onBlur,
//       name,
//       error,
//       required = false,
//       disabled = false,
//       className = "",
//       ...rest
//     },
//     ref
//   ) => {
//     return (
//       <div className="flex flex-col gap-1 w-full">

//         {label && (
//           <label
//             htmlFor={name}
//             className="text-sm font-medium text-gray-700"
//           >
//             {label}
//             {required && <span className="text-red-500 ml-1">*</span>}
//           </label>
//         )}

//         <input
//           ref={ref}
//           id={name}
//           name={name}
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           disabled={disabled}
//           className={`border rounded-lg px-3 py-2 outline-none
//           focus:ring-2 focus:ring-blue-400
//           ${error ? "border-red-500" : "border-gray-300"}
//           ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
//           ${className}`}
//           {...rest}
//         />

//         {error && (
//           <p className="text-sm text-red-500">{error}</p>
//         )}
//       </div>
//     );
//   }
// );

// export default ReusableInput;

import React from "react";

const ReusableInput = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  label,
  disabled = "false",
  className,
  required = "false",
  ...rest
}) => {
  return (
    <div>
      {label && <span>{label}</span>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required = {required}
        className={`${error ? "border border-red-100" : "border border-black"} ${className}`}
        {...rest}
      />
      {error && <p className="text-red-200">{error}</p>}
    </div>
  );
};

export default ReusableInput;
