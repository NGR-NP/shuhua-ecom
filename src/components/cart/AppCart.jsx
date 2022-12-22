import Form from "react-bootstrap/Form";
import { FaCartPlus } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const AppCart = () => {
  return (
    <Form>
      <IconContext.Provider
        value={{
          style: { color: "#008ECC", fontSize: "25px", marginRight: "10px" },
        }}
      >
        <FaCartPlus />
        <BsPersonFill />
      </IconContext.Provider>
    </Form>
  );
};

export default AppCart;
