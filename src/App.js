import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import { Search } from './components/Search';
import foods from './foods.json';

export function App() {
  const [food, setFood] = useState(foods);

  return (
    <>
      <div className="App">
        <div>
          <AddFoodForm food={food} setFood={setFood} />
          <Search food={food} setFood={setFood}/>
          <h2>Food List</h2>
          <div className="Content">
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
            }).reverse()}
          </div>
        </div>
      </div>
    </>
  );
}
