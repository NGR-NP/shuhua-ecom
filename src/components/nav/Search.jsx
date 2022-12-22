import Form from "react-bootstrap/Form";

const Search = () => {
  return (
    <Form.Control
      style={{
        position: "relative",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        paddingRight: "2rem",
        textOverflow: "ellipsis",
        borderRadius: "6px",
      }}
      aria-label="Text input with dropdown button"
      placeholder="Search...."
    />
  );
};

export default Search;
