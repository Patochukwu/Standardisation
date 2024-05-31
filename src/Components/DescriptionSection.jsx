import React from 'react'
import Styles from '../styles/Styles.module.css'

export const DescriptionSection = () => {
  return (
    <main className={Styles.DescriptionSectionMain}>
      <section>
        <section>
          <div className={Styles.DescriptionSection1Div}>
            <p><a href=''>Description</a></p>
            <p><a href=''>Additional Information</a></p>
            <p><a href="">Reviews</a></p>
          </div>
        </section>
      </section>
      <section>
        <section className={Styles.DescriptionSection2}>
          <div className={Styles.DescriptionSection2Div}>
            <h3>the quick fox jumps over </h3>
            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className={Styles.DescriptionSection2ImgDiv}>
            <img src="description img.png" alt="" />
          </div>
        </section>
      </section>
    </main>
  )
}
