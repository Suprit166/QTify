import React from "react";
import styles from "./Hero.section.module.css"







export default function HeroSection () {

    return (
       <div className={styles.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img
                    src={require('../../assets/headphone_Img.png')}
                    width={212}
                    alt="headphones"
                />
            </div>
       </div>
    )
}

