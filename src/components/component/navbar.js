import React from "react";
import "../../app/page.module.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="logo">
        <img className="WYCO-logo-blk" alt="Wyco logo blk" src="WYCO-logo-blk.png" />
      </div>
      <div className="nav-links">
        <div className="div-wrapper">
          <div className="text-wrapper">Product</div>
        </div>
        <div className="div">
          <div className="text-wrapper-2">Solutions</div>
          <img className="akar-icons-chevron" alt="Akar icons chevron" src="akar-icons-chevron-down.svg" />
        </div>
        <div className="text-wrapper-3">About</div>
        <div className="overlap-group">
          <div className="start-free-trial">Start Free Trial</div>
        </div>
        <div className="text-wrapper-4">Pricing</div>
      </div>
    </div>
  );
};
