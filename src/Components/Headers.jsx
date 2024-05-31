import React from 'react'
import Styles from './Styles.module.css'

export const Headers = () => {
  return (
    <section>
        <header className={Styles.header1}>
            <section className={Styles.header1A}>
                <section className={Styles.section1}>
                    <p><img src="/call icon.png" alt="" /> (225) 555-0118</p>
                    <p><img src="/mail icon.png" alt="" /> michelle.rivera@example.com</p>
                </section>
                <section>
                    <p>Follow Us  and get a chance to win 80% off</p>
                </section>
                <section className={Styles.section3}>
                    <p>Follow Us  :</p>             
                    <div className={Styles.socialIcons}>
                        <img src="/instagram icon.png" alt="" />
                        <img src="/youtube icon.png" alt="" />
                        <img src="/facebook icon.png" alt="" />
                        <img src="/twitter con.png" alt="" /> 
                    </div>              
                </section>
            </section>
        </header>
        <header className={Styles.header2}>
            <section className={Styles.header2H3}>
                <h3>Bandage</h3>
            </section>
            
            <section className={Styles.header2A}>
                <section>
                    <nav>
                        <ul>
                            <li><a href='http://localhost:5173/'>Home</a></li>
                            <li><a href=''>Shop</a><img src="/dropdown icon.png" alt="" /></li>
                            <li><a href=''>About</a></li>
                            <li><a href=''>Blog</a></li>
                            <li><a href=''>Contact</a></li>
                            <li><a href=''>Pages</a></li>
                        </ul>
                    </nav>
                </section>
                <section className={Styles.header2B}>
                    <div>
                        <p><img src="/profile-icon.png" alt="" /><a href=''>Login</a> / <a href=''>Register</a></p>
                    </div>
                    <img src="/search icon.png" alt="" />
                    <img src="/cart icon.png" alt="" />
                    <img src="/love icon.png" alt="" />
                </section>
            </section>
        </header>
    </section>
  )
}