import React from "react";
import Buscador from "../Buscador";

export default function TopBar() {
  return (
    <div className="top-bar__global">
      <div className="row">
        <div className="col-md-6">logo</div>
        <div className="col-md-6">
          <Buscador />
        </div>
      </div>
    </div>
  );
}
