import React from 'react'
import styles from './SubParagraph.module.css'

function SubParagraph() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">

          <h2 className={styles.header}>
            I am a subparagraph title
          </h2>
          <p className={styles.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam porro amet dolorem unde voluptatum pariatur voluptatem suscipit iure, repudiandae facilis quam dolore ipsa tempore quo obcaecati, earum fugit molestias! Deserunt!
          </p>
        </div>
      </div>
    </div>
  )
}

export default SubParagraph
