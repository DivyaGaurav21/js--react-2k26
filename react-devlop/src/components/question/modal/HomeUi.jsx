//create a modal

import React, { useState } from "react";
import Modal from "./Modal";
import PortalModal from "./PortalModal";

const HomeUi = () => {
    const [isOpen , setIsOpen] = useState(false);

  return <div c>
    <span>Suppose HomeUi Nav</span>
    {
        isOpen && (
            // <Modal
            //    isOpen={isOpen}
            //    onClose={() => setIsOpen(false)}
            // >modal Content
            // </Modal>
            <PortalModal
                isOpen={isOpen}
               onClose={() => setIsOpen(false)}
            />
        )
    }
    <button className="btn" onClick={() => setIsOpen(isOpen => !isOpen)}>register</button>
  </div>;
};

export default HomeUi;
