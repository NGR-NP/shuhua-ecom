import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";

import Search from "./Search";
const AppSearchBar = () => {
  return (
    <InputGroup style={{ width: "80%", margin: "auto" }}>
      <Search
        
      />
      <BsSearch style={{ position: "absolute", top: "11px", right: "12px", zIndex:"11" }} />
    </InputGroup>
  );
};

export default AppSearchBar;
