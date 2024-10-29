import { NavLink } from 'react-router-dom'
import styles from "./PageNav.module.css"

const PageNav = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
        </ul>
    </nav>
  )
}

export default PageNav