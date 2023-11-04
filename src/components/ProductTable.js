import ProductRow from "../components/ProductRow";
import ProductCategoryRow from "../components/ProductCategoryRow";
function ProductTable(props) {

    return (
<>

        <table class="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          <ProductCategoryRow/>
            <ProductRow />
            <ProductCategoryRow/>
            <ProductRow />
            </tbody>
            </table>
</>
        
    );
}

export default ProductTable;


