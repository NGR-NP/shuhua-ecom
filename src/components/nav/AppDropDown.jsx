import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { CategoryContext } from "../../section/Nav";

const AppDropDown = () => {
  const { categories, activeCategory, handleChangeCategory } =
    useContext(CategoryContext);
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        {activeCategory}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {categories.map((category) => (
          <Dropdown.Item
            onClick={() => handleChangeCategory(category)}
            key={category}
            active={activeCategory === category ? true : false}
          >
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AppDropDown;
