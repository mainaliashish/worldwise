import React from 'react'
import styles from "./Sidebar.module.css"
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from './Footer';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <Logo />
        <AppNav />
        <p>List of cities</p>
        <Footer />
    </div>
  )
}

export default Sidebar