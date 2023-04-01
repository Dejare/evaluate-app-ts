import React from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const styles = {
    backgroundColor: "rgba(163, 163, 163, 0.9)",
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center absolute top-0 z-50">
      <div
        className="w-screen h-screen  flex items-center justify-center"
        style={styles}
      >
        <div className="md:w-1/4 w-[80%] md:h-1/4  h-[25vh] bg-neutral-600 flex items-center justify-center absolute opacity-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
