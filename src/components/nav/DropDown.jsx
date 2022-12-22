import { useContext } from "react";
import { CategoryContext } from "../../section/Nav";
import Dropdown from "react-bootstrap/Dropdown";
const DropDown = () => {
  const { categories, activeCategory, handleChangeCategory } =
    useContext(CategoryContext);
  return (
    <>
      {categories.map((category) => (
        <Dropdown.Item
          onClick={() => handleChangeCategory(category)}
          key={category}
          active={activeCategory === category ? true : false}
        >
          {category}
        </Dropdown.Item>
      ))}
    </>
  );
};

export default DropDown;
