"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";

// Utility function to merge class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const HoverEffect = function({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return React.createElement(
    'div',
    {
      className: cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )
    },
    items.map(function(item, idx) {
      return React.createElement(
        'a',
        {
          href: item.link,
          key: item.link,
          className: "relative group block p-2 h-full w-full",
          onMouseEnter: function() { setHoveredIndex(idx); },
          onMouseLeave: function() { setHoveredIndex(null); }
        },
        React.createElement(
          AnimatePresence,
          null,
          hoveredIndex === idx && React.createElement(
            motion.span,
            {
              className: "absolute inset-0 h-full w-full bg-slate-800/[0.8] dark:bg-slate-800/[0.8] block rounded-lg",
              layoutId: "hoverBackground",
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { duration: 0.15 }
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 }
              }
            }
          )
        ),
        React.createElement(
          Card,
          null,
          item.icon && React.createElement(
            'div',
            { className: "mb-4 group-hover:scale-110 transition-transform duration-300" },
            item.icon
          ),
          React.createElement(CardTitle, null, item.title),
          React.createElement(CardDescription, null, item.description)
        )
      );
    })
  );
};

export const Card = function({ className, children }) {
  return React.createElement(
    'div',
    {
      className: cn(
        "rounded-lg h-full w-full p-6 overflow-hidden bg-slate-800/50 border border-slate-700/50 group-hover:border-blue-500/30 relative z-20 backdrop-blur-sm",
        className
      )
    },
    React.createElement(
      'div',
      { className: "relative z-50" },
      React.createElement(
        'div',
        { className: "w-full" },
        children
      )
    )
  );
};

export const CardTitle = function({ className, children }) {
  return React.createElement(
    'h3',
    {
      className: cn("text-white font-semibold text-xl mb-3 group-hover:text-red-500 transition-colors duration-200", className)
    },
    children
  );
};

export const CardDescription = function({ className, children }) {
  return React.createElement(
    'p',
    {
      className: cn(
        "text-slate-300 text-sm leading-relaxed",
        className
      )
    },
    children
  );
};