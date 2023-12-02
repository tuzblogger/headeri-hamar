import logo from "./images/logo.png"
import { useEffect, useState } from "react";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {

    return (
        <header>
            <img src={logo} alt="" id="logo-menu"/>
        </header>
    )
}