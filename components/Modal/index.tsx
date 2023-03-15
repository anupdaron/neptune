import { useState } from "react";

type ModalProps = {
  handleClose: () => void;
  children: React.ReactNode;
  header?: string;
};

const Modal: React.FC<ModalProps> = ({ children, handleClose, header }) => {
  return (
    <div className="fixed z-50 top-1/3 inset-0 ">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                {header}
              </h3>
              <button
                className="text-gray-500  hover:text-gray-700 focus:outline-none focus:text-gray-700"
                onClick={handleClose}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.707 6.293a1 1 0 0 1 0 1.414L2.414 12l4.293 4.293a1 1 0 1 1-1.414 1.414L1.586 12 5.293 8.293a1 1 0 0 1 1.414-1.414z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
