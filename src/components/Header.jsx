import Navigation from "./Navigation";
import React, { useState } from "react";

const Header = () => (
  <header className="bg-pink-50 py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="text-3xl font-bold text-pink-600"></div>
      <Navigation />
    </div>
  </header>
);

export default Header;
