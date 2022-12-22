import NavComp from "../components/nav/Nav.jsx";
import { createContext, useState } from "react";

export const CategoryContext = createContext([]);
const NavSection = () => {
  const [activeCategory, setActiveCAtegory] = useState("A");

  const handleChangeCategory = (category) => {
    setActiveCAtegory(category);
  };
  return (
    <CategoryContext.Provider
      value={{
        categories: ["All Categories", "A", "B", "C"],
        handleChangeCategory,
        activeCategory,
      }}
    >
      <NavComp />
    </CategoryContext.Provider>
  );
};

export default NavSection;
