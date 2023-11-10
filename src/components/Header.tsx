import React from "react";
import Menu from "./Menu";
import Banner from "../assets/banner.svg";

import "../styles/header.scss";

export default function Header() {
  return (
    <>
      <header className="w-full">
        <Menu />
        <div className=" relative">
          <img src={Banner} alt="banner" className="z-10 w-full" style={{
            objectFit: "contain",
          }} />
          <div className="banner-hero-placeholder absolute top-0 right-0 left-0"></div>
          <div className="h-[540px] absolute top-0 right-0 left-0 flex flex-col z-30 items-center justify-center">
            <div className="flex flex-col justify-center items-center w-[405px]">
              <h1 className="text-white text-[32px] font-bold text-center">
                Pilih Game Favorite Kalian
              </h1>
              <p className="my-5 text-white px-7 text-center">
                Shortbread cookie tootsie roll sugar plum cheesecake pudding
                croissant apple pie. Lollipop macaroon lollipop croissant
                chocolate cake croissant fruitcake brownie jelly-o.
              </p>
              <button className="text-white py-3 px-[20px] rounded-lg bg-[#0884F5]">
                Sign Up For Free Account
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
