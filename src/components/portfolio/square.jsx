import React from 'react'
import styles from './square.module.css'

function Square({ date, title, content, src, type, alt, onClick }) {
  const imgsize = type === 'web' ? styles.webSize : styles.phoneSize;
  return (

    <div className={styles.squareBox} onClick={onClick}>
      <div className={styles.squareTextBox}>
        <span>{title}</span>
        <span>{date}</span>
        <span>{content}</span>
      </div>
      <img src={src} alt={alt} className={imgsize} />
    </div>

  )
}

export default Square