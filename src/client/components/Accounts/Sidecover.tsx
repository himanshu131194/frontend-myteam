import React from "react";
import CONFIG from "../../constants/config";

const SideCover: React.FC = () => {
  return (
    <>
      <div className="position-absolute top-0 left-0 right-0 mt-3 mx-3">
        <div className="d-none d-lg-flex justify-content-between">
          <a href="index.html">
            <img
              className="w-100"
              src={`${CONFIG.ROOT_URL}/assets/svg/logos/logo.svg`}
              alt="Image Description"
              style={{ maxWidth: "12rem", minWidth: "7rem" }}
            />
          </a>
        </div>
      </div>
      <div style={{ maxWidth: "23rem" }}>
        <div className="text-center mb-5">
          <img
            className="img-fluid"
            src={`${CONFIG.ROOT_URL}/assets/svg/illustrations/chat.svg`}
            alt="Image Description"
            style={{ maxWidth: "12rem" }}
          />
        </div>
        <div className="mb-5">
          <h2 className="display-4">Build digital products with:</h2>
        </div>
        <ul className="list-checked list-checked-lg list-checked-primary list-unstyled-py-4">
          <li className="list-checked-item">
            <span className="d-block font-weight-bold mb-1">
              All-in-one tool
            </span>
            Build, run, and scale your apps - end to end
          </li>

          <li className="list-checked-item">
            <span className="d-block font-weight-bold mb-1">
              Easily add &amp; manage your services
            </span>
            It brings together your tasks, projects, timelines, files and more
          </li>
        </ul>
        <div className="row justify-content-between mt-5 gx-2">
          <div className="col">
            <img
              className="img-fluid"
              src={`${CONFIG.ROOT_URL}/assets/svg/brands/gitlab-gray.svg`}
              alt="Image Description"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src={`${CONFIG.ROOT_URL}/assets/svg/brands/fitbit-gray.svg`}
              alt="Image Description"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src={`${CONFIG.ROOT_URL}/assets/svg/brands/flow-xo-gray.svg`}
              alt="Image Description"
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src={`${CONFIG.ROOT_URL}/assets/svg/brands/layar-gray.svg`}
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideCover;
