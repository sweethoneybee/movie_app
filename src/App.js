import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>I rate {rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    rating: 5,
  },
  {
    id: 2,
    name: "samgyeopsal",
    rating: 4.5,
  },
  {
    id: 3,
    name: "ramen",
    rating: 3,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
