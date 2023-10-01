import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {
  console.log("PASSOU NO APP");

  const [productId, setProductID] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log("PASSOU NO useEffect");
    setProd(findProduct(productId));
  }, [productId]);

  function handleClick() {
    console.log("PASSOU NO handleClick");
    setProductID(2);
  }

  return (
    <>
      <h2>{prod?.mane}</h2>
      <p>{prod?.price}</p>
      <br></br>
      <button onClick={handleClick}>Mudar para produto 2</button>
    </>
  );
}

export default App;
