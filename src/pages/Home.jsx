import React from 'react';
import Card from '../components/Card';
import ProductModal from '../components/ProductModal';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const headingStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "1.8rem",
    marginBottom: "20px",
  };

  const searchInputStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1rem",
    color: "#333",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "10px 15px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    outline: "none",
    transition: "all 0.2s ease",
  };

  const searchInputFocusStyle = {
    border: "1px solid #007BFF",
    boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
  };

  const searchBlockStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const searchIconStyle = {
    width: "24px",
    height: "24px",
    opacity: 0.7,
    transition: "opacity 0.2s ease",
  };

  const clearIconStyle = {
    width: "20px",
    height: "20px",
    cursor: "pointer",
    opacity: 0.8,
    transition: "opacity 0.2s ease",
  };

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        loading={isLoading}
        onClickCard={handleCardClick}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40 flex-wrap search-title-container">
        <h1 style={headingStyle} className="page-title animated-title">
          {searchValue ? `Search results for: "${searchValue}"` : 'All Sneakers'}
        </h1>
        <div style={searchBlockStyle}>
          <div className="icon-container">
            <img style={searchIconStyle} src="img/search.svg" alt="Search" className="animated-icon" />
          </div>
          {searchValue && (
            <div className="icon-container">
              <img
                onClick={() => setSearchValue('')}
                style={clearIconStyle}
                src="img/btn-remove.svg"
                alt="Clear"
                className="animated-icon"
              />
            </div>
          )}
          <input
            className="search-input"
            style={searchInputStyle}
            onFocus={(e) => Object.assign(e.target.style, searchInputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, searchInputStyle)}
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>

      {isModalOpen && selectedProduct && (
        <ProductModal item={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Home;
