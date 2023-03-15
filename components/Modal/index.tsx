import { IoClose } from "react-icons/io5";

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
          <div className="absolute inset-0 bg-gray-900 opacity-100"></div>
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
                <IoClose size={28} />
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
