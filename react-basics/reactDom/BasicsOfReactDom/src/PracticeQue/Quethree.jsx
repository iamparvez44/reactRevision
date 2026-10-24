
import { useSearchParams } from "react-router-dom";

const QueThree = () => {

    
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  const handleFilter = (e) => {
    e.preventDefault();

    const searchValue = e.target.search.value;
    const categoryValue = e.target.category.value;

    setSearchParams({
      search: searchValue,
      category: categoryValue,
    });
  };

  return (
    <div>
      <form onSubmit={handleFilter}>
        <input
          name="search"
          placeholder="Search"
        />

        <select name="category">
          <option value="electronics">electronics</option>
          <option value="cloths">cloths</option>
          <option value="shoes">shoes</option>
        </select>

        <button type="submit">Filter</button>
      </form>

      <h2>Search: {search}</h2>
      <h2>Category: {category}</h2>
    </div>
  );
};

export default QueThree