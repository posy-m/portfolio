import React from 'react';
import styles from '../header/header.module.css';
import { Link } from 'react-scroll';



const Header = () => {
  return (
    <div className={styles.headerBox}>
      <div></div>
      <div className={styles.indexBox}>
        {/* <Link to='about' smooth={true} duration={500} containerId='rightBox'>About</Link> */}
        <Link to='about' smooth={true} duration={500} >About</Link>
        <Link to='stack' smooth={true} duration={500} >Stack</Link>
        <Link to='portfolio' smooth={true} duration={500} >Portfolio</Link>
        {/* <Link to='education' smooth={true} duration={500} >Education</Link> */}
      </div>
    </div>
  );
};

export default Header;
