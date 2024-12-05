import React from 'react'
import styles from './square.module.css'

function Square({ date, title, content, src, type, alt, onClick, no }) {
  // const imgsize = type === 'web' ? styles.webSize : styles.phoneSize;
  return (
    <div className={styles.squareAll}>
      <div className={styles.projectnNo}>project {no}</div>
      <div className={styles.squareBox} onClick={onClick}>
        <div className={styles.squareTextBox}>
          <span>{title}</span>
          <span>{date}</span>
          <span>{content}</span>
          <div className={styles.imgSize}>
            <img src={src} alt={alt} className={styles.imgContent} />
          </div>
        </div>
        {/* <img src={src} alt={alt} className={imgsize} /> */}
      </div>
    </div>

  )
}

export default Square
