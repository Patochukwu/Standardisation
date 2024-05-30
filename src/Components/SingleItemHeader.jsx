import React from 'react'
import Styles from './Styles.module.css'

export const SingleItemHeader = () => {
  return (
    <main className={Styles.SingleItemHeaderMain}>
      <section>
        <div className={Styles.SingleItemHeaderDiv}>
          <h3><a href=''>Home</a></h3>
          <img src="arrow-right icon.png" alt="" />
          <h4>Shop</h4>
        </div>
      </section>
    </main>
  )
}
