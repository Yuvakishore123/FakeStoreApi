import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);
  console.log(myData)

  return (
    <>
      <h1>Axios </h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.map((post) => {
          const { description, id, title,image } = post;
          return (
            <div key={id} className="card">
              <h2>{title}</h2>
              <p>{description}</p>
              <img className="card" src={image} alt="item-pic"/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App; 