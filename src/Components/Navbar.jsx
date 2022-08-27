import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const links = [
  
  {
    path: "/",
    title: <img className={styles.img} src="https://yt3.ggpht.com/eH_MdhjC_DxpUtxBNXqb7fhhfKSa-nWiIQ1IqaRxD06nEbFiIRahQf5bUHE1WPpnfczXsvUdYA=s88-c-k-c0x00ffffff-no-rj" alt="square"/>
  },
  {
    path: "/",
    title: "hotjar"
  },
  {
    path: "/product",
    title: "Product"
  },
  {
    path: "/why",
    title: "Why Hotjar"
  },
  {
    path: "/pricing",
    title: "Pricing"
  },
  {
    path: "/learn",
    title: "Learn"
  },
  {
    path: "/company",
    title: "Company"
  },
  {
    path: "/sign",
    title: <button className={styles.Button}>Sign In</button>
  },
  {
    path: "/started",
    title: <button className={styles.button}>Get Started Free</button>
  }
];

function Navbar() {
  return (
    <>
    <div className={styles.navDiv}>
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          key={link.path}
          to={link.path}
        >
           {link.title}
          
        </NavLink>
      ))}
    </div>
    </>
  );
}
export default Navbar;
