"use client";

import React from 'react';

const PinContainer = ({ children, title, href }) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105">
        {children}
      </div>
    </div>
  );
};

export default PinContainer;
