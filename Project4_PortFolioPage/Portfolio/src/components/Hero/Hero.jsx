import React from "react"
import { getImageUrl } from "../../utils.js";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Nagaraj</h1>
            <p className={styles.description}>I'm a passionate python developer with 2.3 years of experience.</p>
            <a className={styles.contactBtn} href="mailto:nagarajmurgod27oct@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={ getImageUrl("hero/heroImage.png") } alt="profile pic" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}