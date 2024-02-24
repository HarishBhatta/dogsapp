"use client";
import * as React from 'react';

const Dropdown = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Categories</button>
      {open ? (
        <ul className="menu z-10">
          <li className="menu-item">
            <button>BODY HARNESS</button>
          </li>
          <li className="menu-item">
            <button>TOYS</button>
          </li>
          <li className="menu-item">
            <button>FOOD</button>
          </li>
          <li className="menu-item">
            <button>OTHER ITEMS</button>
          </li>
          <li className="menu-item">
            <button>BIRD ITEM</button>
          </li>
          <li className="menu-item">
            <button>HOUSE AND CAGE</button>
          </li>
          <li className="menu-item">
            <button>FISH ITEM</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;