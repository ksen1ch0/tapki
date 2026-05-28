import { useState } from "react";
import "./App.css";
import products from "./products";

function App() {

  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [maxPrice, setMaxPrice] = useState(70000);

  const filteredProducts = products.filter((product) => {

    const colorMatch =
      selectedColor === "all" ||
      product.color === selectedColor;

    const sizeMatch =
      selectedSize === "all" ||
      product.size.includes(Number(selectedSize));

    const priceMatch =
      product.price <= maxPrice;

    return colorMatch && sizeMatch && priceMatch;
  });

  return (
    <div className="app">

      <h1 className="title">
        НА ПОДЪЕМЕ
      </h1>

      <div className="filters">

        <select
          onChange={(e) =>
            setSelectedColor(e.target.value)
          }
        >

          <option value="all">
            Все цвета
          </option>

          <option value="black">
            Черный
          </option>

          <option value="white">
            Белый
          </option>

          <option value="blue">
            Синий
          </option>

          <option value="green">
            Зеленый
          </option>

          <option value="pink">
            Розовый
          </option>

          <option value="red">
            Красный
          </option>

          <option value="orange">
            Оранжевый
          </option>

          <option value="brown">
            Коричневый
          </option>

          <option value="gray">
            Серый
          </option>

        </select>

        <select
          onChange={(e) =>
            setSelectedSize(e.target.value)
          }
        >

          <option value="all">
            Все размеры
          </option>

          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>

        </select>

      </div>

      <div className="price-filter">

        <h3>
          Максимальная цена:
          {" "}
          {maxPrice.toLocaleString()} ₽
        </h3>

        <input
          type="range"
          min="10000"
          max="70000"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
        />

      </div>

      <div className="products">

        {filteredProducts.map((product) => (

          <div
            className="card"
            key={product.id}
          >

            <img
              src={product.image}
              alt=""
            />

            <h2>
              {product.name}
            </h2>

            <p>
              {product.price.toLocaleString()} ₽
            </p>

            <span>
              Размеры:
              {" "}
              {product.size.join(", ")}
            </span>

            <button>
              Купить
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;