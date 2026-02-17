// CREATE A REUSABLE BUTTON

import React from "react";

const MyButton = ({
    children,
    variant = "primary",
    size = "small",
    isDisable = false,
    isLoading = false,
    onClick,
    className
}) => {

    const buttonVariant = {
        primary: "bg-blue-500 text-white hover:bg-blue-400",
        secondary: "bg-red-500 text-black hover:bg-red-400"
    }

    const btnSize = {
        small: "p-2 text-xl",
        large: "p-4 text-2xl"
    }

    return (
        <button
            onClick={onClick}
            className={`
            rounded-xl
             ${buttonVariant[variant]}
             ${btnSize[size]}
             ${className}`}
            disabled={isDisable || isLoading}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
};

export default MyButton;

// ---------------
