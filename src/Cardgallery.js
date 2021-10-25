import React, { useState } from "react";
import Data from "./data";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CardGallery = () => {
  const [items, setItems] = useState(Data);
  const [pItems, setPItems] = useState([]);

  const filterProduct = (e) => {
    let a = e.target.value;
    let b = parseFloat(a);
    if (b > 1) {
      let arr = pItems.filter((x) => {
        return x.price >= b && x.price <= b + 100;
      });
      setItems(arr);
    }else{
      setItems(Data)
    }
  };

  const filterItems = (x) => {
    let c = x.target.value;
    if (c == "lunch" || c == "dinner" || c == "breakfast") {
      console.log("Working");
      const updatedItems = Data.filter((curElem) => {
        return curElem.category === c;
      });
      setItems(updatedItems);
      setPItems(updatedItems);
    } else {
      setItems(Data);
      
    }
  };
  return (
    <>
      <br />
      <form>
          <select onChange={(x) => filterItems(x)}>
            <option value="select ">Select Your Meal</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <label>Select Your Meal First</label>
          <select onChange={(e) => filterProduct(e)}>
            <option value={0}>Price</option>
            <option value={399}>From Rs 400 to 500</option>
            <option value={500}>From Rs 500 to 600</option>
            <option value={600}>From Rs 600 to 700</option>
            <option value={700}>From Rs 700 to 800</option>
            <option value={800}>From Rs 800 to 900</option>
          </select>
      </form>
      <br />

      <h1 className="menu">Our Menu</h1>
      <div className="data-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, name, image, category, price, description } = elem;
                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>

                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-tittle pt-4 pb-3">
                          <h2>{name}</h2>
                          <p>{description}</p>
                        </div>
                        <div className="price-and-add">
                          <div className="price-and-add-divide d-flex justify-content-between">
                            <h4>Price: Rs {price}</h4>
                            <a href="">
                              <button className="add-btn btn btn-outline-success">
                                Add
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardGallery;
