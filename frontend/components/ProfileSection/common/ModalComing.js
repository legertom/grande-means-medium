import React from "react";

const ModalComing = () => {
  return (
    <>
      {/* Modal */}

      <div
        data-keyboard="false"
        data-backdrop="static"
        className="modal fade p-0"
        id="modalcomming"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "black" }}>
            <div className="modal-header p-0 border-0 ">
              <span
                style={{ cursor: "pointer" }}
                className="close text-white pr-5 mt-1"
                data-dismiss="modal"
              >
                x
              </span>
            </div>
            <div className="modal-body text-center pb-5">
              <h1 className="btncolor11"> Comming Soon</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
    </>
  );
};

export default ModalComing;
