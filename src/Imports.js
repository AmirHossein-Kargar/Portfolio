// imports.js
import { useState } from "react";
import { LoadingScreen } from "./components/Loading";
import { NavBar } from "./components/Navbar";
import "./index.css";
import { MobileMenu } from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/sections/Projects";

export {
  useState,
  LoadingScreen,
  NavBar,
  MobileMenu,
  Home,
  About,
  Route,
  Routes,
  Projects,
};
