const Modal = ({ modalState, setModalState, src }) => {
  if (!modalState) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-24">
        <div
          className="fixed inset-0 bg-black opacity-70"
          onClick={() => setModalState(false)}
        ></div>
        <div className="relative bg-white p-10 overflow-hidden z-60 rounded-3xl">
          <button
            className="float-right my-3"
            onClick={() => setModalState(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <video src={src} controls />
        </div>
      </div>
    </>
  );
};

export default Modal;
