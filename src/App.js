import logo from "./logo.svg";
import "./App.css";
import CounterRow from "./components/CounterRow";
import ProductRow from "./components/ProductRow";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

let counterRows = [];
for (let i = 0; i < 5; i++) {
  counterRows.push(<CounterRow Button1={i} id={i + 1} />);
}

// const [count, setCount] = React.useState(0);

function App() {
  return (
    <>
      <header>
        <input type="text" id="fname" name="fname" placeholder="Search"></input>
        <br></br>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
        <label> Only show products in stock</label>
      </header>
      <div id="counterContainer">
        <table class="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <ProductTable/>
            <ProductRow />
            <ProductTable/>
            <ProductRow />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;