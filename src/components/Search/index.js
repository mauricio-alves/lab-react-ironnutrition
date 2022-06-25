import { Divider, Input } from 'antd';
import { useState } from 'react';

export function Search({ food, setFood }) {
  const [search, setSearch] = useState({
    name: '',
  });

  function handleSearch(event) {
    setSearch({ ...search, [event.target.name]: event.target.value });

    // food
    //   .filter((food) => {
    //     return food.name
    //       .toLowerCase()
    //       .includes(event.target.value.toLowerCase()) && setFood(...food, search);
    //   })
    //   .map((currentFood) => {
    //     return {
    //       name: currentFood.name,
    //       calories: currentFood.calories,
    //       image: currentFood.image,
    //       servings: currentFood.servings,
    //     };
    //   });
  }

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="input-name">Search by name</label>
      <Input
        id="input-name"
        name="name"
        value={search.name}
        type="text"
        onChange={handleSearch}
      />
    </>
  );
}
