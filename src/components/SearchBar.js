function SearchBar(props) {
    return (
      <>
        {" "}
        <input type="text" id="fname" name="fname" placeholder="Search"></input>
        <br></br>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
        <label> Only show products in stock</label>
      </>
    );
  }
  
  export default SearchBar;
  