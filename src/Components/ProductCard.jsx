import React from 'react'
import Styles from '../styles/Products.module.css'

export const ProductCard = ({ product}) => {
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <main className={Styles.productCard}>
      <img src={product.thumbnail} alt={product.title} />
      <section className={Styles.productCardSection}>
          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <div className={Styles.productCardPrice}>
            <span className={Styles.originalPrice}>${product.price.toFixed(2)}</span>
            <span className={Styles.discountedPrice}>${discountedPrice}</span>
          </div>
      </section>
    </main>
  );
};