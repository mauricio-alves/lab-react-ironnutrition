import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import { Search } from './components/Search';
import foods from './foods.json';

export function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(true);

  // iteration 8
  if (!allFoods.length) {
    console.log('Oops! There is no more content to show.');
    return;
  }

  return (
    <>
      <div className="App">
        {/* iteration 7*/}
        {showForm && (
          <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
        )}
        <div>
          <Button
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            {' '}
            Hide Form / Add New Food{' '}
          </Button>
        </div>

        <div>
          <Search search={search} setSearch={setSearch} />

          <h2>Food List</h2>

          <div className="Content">
            {allFoods
              .filter((food) => {
                return food.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((food) => {
                return (
                  <div key={food.name}>
                    <FoodBox
                      food={food}
                      allFoods={allFoods}
                      setAllFoods={setAllFoods}
                    />
                  </div>
                );
              })
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
}
