import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://backend-psi-woad.vercel.app/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="d-flex search-form bg-white rounded-full p-2"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-white p-2 py-1 rounded-sm border-none border-white"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="bg-blue-500 rounded-full text-white p-2 py-1 ml-2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
