import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaFilter } from "react-icons/fa";
import "./Navbar.css";
import { colourStyles } from "./ColourStyles";
import ScrollBlock from "./ScrollBlock";
import { RiCloseFill } from "react-icons/ri";
const FilterMobile = ({
  spalvos,
  dydziai,
  filter,
  changePage,
  filterOpened,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const { blockScroll, allowScroll } = ScrollBlock();
  const [value, setValue] = useState("Filtras");
  const options = [
    { value: "Tipas", label: "Tipas" },
    { value: "Dydis", label: "Dydis" },
    { value: "Spalva", label: "Spalva" },
  ];
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
          onChange={(e) => setValue(e.value)}
          isSearchable={false}
        />
        {value === "Tipas" && (
          <ul className={`dropdownas-mobile`}>
            <li>
              <a
                onClick={() => (
                  setDropdown(!dropdown),
                  setValue("Filtras"),
                  filter("tshirt", "kind"),
                  changePage(1)
                )}
              >
                Marškinėliai
              </a>
            </li>
            <li>
              <a
                onClick={() => (
                  setDropdown(!dropdown),
                  setValue("Filtras"),
                  filter("hoodie", "kind"),
                  changePage(1)
                )}
              >
                Džemperiai
              </a>
            </li>
            <li>
              <a
                onClick={() => (
                  setDropdown(!dropdown),
                  setValue("Filtras"),
                  filter("dress", "kind"),
                  changePage(1)
                )}
              >
                Suknelės
              </a>
            </li>
          </ul>
        )}
        {value === "Dydis" && (
          <ul className={`dropdownas-mobile`}>
            {dydziai.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    onClick={() => (
                      setDropdown(!dropdown),
                      setValue("Filtras"),
                      filter(item, "size"),
                      changePage(1)
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
                      filter(item, "color"),
                      changePage(1)
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

export default FilterMobile;
