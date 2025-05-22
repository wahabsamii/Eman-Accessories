import React, { useState, useEffect } from "react";

const FilterMenu = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Extract unique categories
  useEffect(() => {
    if (products?.length) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category.name)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page
  };

  // Filtered products
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category.name === selectedCategory);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="flex flex-row w-full gap-4">
      {/* Filter options */}
      <div className="filter-options bg-slate-200 w-[25%] flex flex-col p-5">
        <h4 className="text-2xl font-bold mb-4">Categories</h4>
        <label className="w-full text-[20px]">
          <input
            type="checkbox"
            name="category"
            value="all"
            checked={selectedCategory === "all"}
            onChange={handleCategoryChange}
          />
          All
        </label>
        {categories.map((category) => (
          <label className="text-[20px]" key={category}>
            <input
              type="checkbox"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Product list */}
      <div className="product-container w-[75%] p-5 flex flex-col items-center">
        <div className="flex flex-wrap justify-start gap-5 w-full">
          {currentProducts.map((item, i) => (
            <div key={i} className="w-[250px] p-2 rounded-xl bg-blue-200">
              <img
                src={item.photo}
                alt=""
                className="rounded-xl mb-3 w-[250px] h-[250px] object-cover"
              />
              <p className="text-blue-200 bg-black inline px-1 py-1 rounded-sm text-[14px]">
                {item.category.name}
              </p>
              <h1 className="text-[18px] font-semibold py-2">{item.name}</h1>
              <p>{item.description.split(" ").slice(0, 20).join(" ")}...</p>
              <p>$ {item.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mt-6 flex gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-4 py-2 rounded border ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;