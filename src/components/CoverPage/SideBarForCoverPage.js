import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
const SideBarForCoverPage = () => {
  return (
    <MDBCol md="6">
      <form className="form-inline mt-4 mb-4" style={{ width: "289%" }}>
        <MDBIcon icon="search" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </MDBCol>
  );
};

export default SideBarForCoverPage;
