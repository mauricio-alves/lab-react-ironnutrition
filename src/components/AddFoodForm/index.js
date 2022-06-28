import { Divider, Input } from 'antd';
import { useState } from 'react';

export function AddFoodForm({ allFoods, setAllFoods }) {
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
    servings: 0,
  });

  function handleFood(event) {
    setNewFood({ ...newFood, [event.target.name]: event.target.value });
  }

  function addToFoodArray(event) {
    event.preventDefault();
    setAllFoods([...allFoods, newFood]);
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="input-name">Name</label>
      <Input
        id="input-name"
        name="name"
        value={newFood.name}
        type="text"
        onChange={handleFood}
      />

      <label htmlFor="input-image">Image</label>
      <Input
        id="input-image"
        value={newFood.image}
        type="text"
        name="image"
        onChange={handleFood}
      />

      <label htmlFor="input-calories">Calories</label>
      <Input
        id="input-calories"
        value={newFood.calories}
        type="number"
        name="calories"
        onChange={handleFood}
      />

      <label htmlFor="input-servings">Servings</label>
      <Input
        id="input-servings"
        value={newFood.servings}
        type="number"
        name="servings"
        onChange={handleFood}
      />

      <button type="submit" onClick={addToFoodArray}>
        Create
      </button>
    </form>
  );
}
