import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright { new Date().getFullYear } by WorldWise Inc.
            </p>
        </footer>
    </div>
  )
}

export default Footer