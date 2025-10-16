import React from 'react'
import styles from './Card.module.css'

const Card = ({post}) => {
  return (
    <div className={styles.container}>
        
        <div className={styles.grid}>
            <div className={styles.grid_child} style={{margin: '50px'}}>
                <h1 style={{fontWeight:'bolder',marginBottom: '15px'}}>{post.title}</h1>
                <p style={{marginBottom: '10px'}}>{post.body}</p>
                <p>{post.author}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
