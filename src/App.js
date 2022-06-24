import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json';

export function App() {
  const [food, setFood] = useState(foods);

  return (
    <>
      <div className="App">
        <h2>Food List</h2>
        <div className="Content">
          <AddFoodForm food={food}/>
          {food.map((currentFood) => {
            return (
              <FoodBox
                food={{
                  name: currentFood.name,
                  calories: currentFood.calories,
                  image: currentFood.image,
                  servings: currentFood.servings,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
