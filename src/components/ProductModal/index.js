import React from 'react';
import AppContext from '../../context';
import styles from './ProductModal.module.scss';

function ProductModal({ item, onClose }) {
  const { onAddToCart } = React.useContext(AppContext);
  const [selectedSize, setSelectedSize] = React.useState('');
  const [showNotification, setShowNotification] = React.useState(false);

  const sizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    onAddToCart({ ...item, size: selectedSize });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.content}>
          <img src={item.imageUrl} alt={item.title} className={styles.image} />

          <div className={styles.info}>
            <h2>{item.title}</h2>
            <p className={styles.price}>{item.price} EUR</p>
            {item.description && <p className={styles.description}>{item.description}</p>}

            <div className={styles.sizes}>
              <h3>Select Size:</h3>
              <div className={styles.sizeGrid}>
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              className={styles.addToCartBtn}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {showNotification && (
              <div className={styles.notification}>
                Item added to cart successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;