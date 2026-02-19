// ReactDOM.createPortal(component, domNode)
import React from "react";
import ReactDOM from "react-dom";

const PortalModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

         {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal Box */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 h-96 relative">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default PortalModal;
