import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchitem, setSerachItem] = useState("");

  return (
    <div className="ui segment">
      <form
        className="ui form"
        onSubmit={(event) => {
          event.preventDefault();
          // console.log(this.state.searchitem);
          props.uponSubmit(searchitem);
        }}
      >
        <label>Video Search</label>
        <input
          value={searchitem}
          type="text"
          onChange={(event) => {
            setSerachItem(event.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
