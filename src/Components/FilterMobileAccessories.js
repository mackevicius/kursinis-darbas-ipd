import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaFilter } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { colourStyles } from "./ColourStyles";
import ScrollBlock from "./ScrollBlock";
import { RiCloseFill } from "react-icons/ri";

const FilterMobileAccessories = ({
  spalvos,
  filter,
  modeliai,
  filterOpened,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState("Filtras");
  const options = [
    { value: "Modelis", label: "Modelis" },
    { value: "Spalva", label: "Spalva" },
  ];
  const { blockScroll, allowScroll } = ScrollBlock();
  useEffect(() => {
    if (dropdown) {
      blockScroll();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else allowScroll();
  }, [dropdown]);
  return (
    <div className="filter-border">
      <FaFilter
        onClick={() => {
          setDropdown(!dropdown);
          filterOpened();
        }}
        style={{ color: "white" }}
        size="1.9em"
      />

      <div className={`dropdownas filter ${dropdown && "display"}`}>
        <RiCloseFill
          size="4.5em"
          className="closeFilterMobile"
          onClick={() => {
            setDropdown(!dropdown);
          }}
        />
        <Select
          className="select"
          options={options}
          placeholder={value}
          styles={colourStyles}
          isSearchable={false}
          onChange={(e) => setValue(e.value)}
        />
        {value === "Modelis" && (
          <ul className={`dropdownas-mobile`}>
            {modeliai.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    onClick={() => (
                      setDropdown(!dropdown),
                      setValue("Filtras"),
                      filter(item, "kind")
                    )}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        {value === "Spalva" && (
          <ul className={`dropdownas-mobile-spalva`}>
            {spalvos.map((item) => {
              return (
                <li key={item.id}>
                  <div
                    onClick={() => (
                      setDropdown(!dropdown),
                      setValue(""),
                      filter(item, "color")
                    )}
                    className={`${item}`}
                  ></div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterMobileAccessories;
