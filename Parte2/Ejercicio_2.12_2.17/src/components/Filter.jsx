const Filter = ({ search, setSearch }) => {
  return (
    <div>
      fliter shown with
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Filter;
