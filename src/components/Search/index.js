import { Divider, Input } from 'antd';

export function Search({ search, setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="input-name">Search by name</label>
      <Input
        id="input-name"
        name="name"
        value={search}
        type="text"
        onChange={handleChange}
      />
    </>
  );
}
