import React from "react";
import { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

export default function Layout() {
  useEffect(() => {
    let bg_colours = ["973671", "ECFFE5", "0A4840", "F7DFE6", "333027", "E9F7FF", "824E28"];
    let font_colours = ["ffb261", "3f76f7", "c4ffb3", "c48d0b", "ae63e1", "678c26", "ff77d0"];

    let randomcolor = Math.floor(Math.random() * bg_colours.length);

    document.querySelector("body").style.backgroundColor = `#${bg_colours[randomcolor]}`;
    document.querySelector("body").style.color = `#${font_colours[randomcolor]}`;
    // document.querySelector("a").style.color = `#${font_colours[randomcolor]}`;
    //document.querySelector('a').style.borderBottom = `1px solid #${font_colours[randomcolor]}`;

    function invertHex(hex) {
      return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
    }
    let invertedFontColor = invertHex(`${font_colours[randomcolor]}`);
    let invertedBGColor = invertHex(`${bg_colours[randomcolor]}`);

    document.querySelector(":root").style.setProperty("--inverted-font-color", "#" + invertedFontColor);
    document.querySelector(":root").style.setProperty("--inverted-bg-color", "#" + invertedBGColor);
    document.querySelector(":root").style.setProperty("--visited-link", "#" + font_colours[randomcolor]);

    if (window.innerWidth < 800) {
      document.querySelectorAll("img").forEach(function (imgs) {
        imgs.style.filter = "none";
      });
    }

    //black and white photo effect
    document.querySelectorAll("img").forEach(function (imgs) {
      imgs.addEventListener("mouseenter", function () {
        imgs.style.filter = "none(1)";
        imgs.setAttribute("style", "-webkit-filter:none");
      });

      imgs.addEventListener("mouseleave", function () {
        imgs.style.filter = "invert(1)";
        imgs.setAttribute("style", "-webkit-filter:invert(1)");
      });
    });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
