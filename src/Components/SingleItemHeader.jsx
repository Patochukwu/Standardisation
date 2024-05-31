import React from 'react'
import Styles from '../styles/Products.module.css'

export const SingleItemHeader = () => {
  return (
    <main className={Styles.SingleItemHeaderMain}>
      <section>
        <div className={Styles.SingleItemHeaderDiv}>
          <h3><a href='http://localhost:5173/'>Home</a></h3>
          <img src="arrow-right icon.png" alt="" />
          <h4>Shop</h4>
        </div>
      </section>
    </main>
  )
}
