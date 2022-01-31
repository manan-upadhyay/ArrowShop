import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setKeyword("");
    if (keyword) {
      history.push(`/search/${keyword}`);
    } else {
      history.push(`/`);
    }
  };
  return (
    <div>
      <Form onSubmit={submitHandler} inline>
        <Form.Control
          type="text"
          name="q"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        <Button type="submit" variant="outline-success">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;
