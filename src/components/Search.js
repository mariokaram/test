import React from "react";

const Search = props => (
  <form className="ui form" onSubmit={props.onHandleSubmit}>
    <div className="field" style={{ marginTop: "10px" }}>
      <label>Search</label>
      <input
        type="text"
        name="first-name"
        placeholder="First Name"
        onChange={props.onSearch}
      />
    </div>

    <button className="ui button" type="submit">
      Submit
    </button>
  </form>
);
export default Search;
