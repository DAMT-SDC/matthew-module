import React from 'react';
import styles from '../css/StarListEntry.css'

const StarListEntry = props => (
  <div onClick={props.handleRateClick} id={props.id}>
    <li className={styles.starListEntry}>
      <div className={styles.starRating}>{props.id} STARS</div>
      <div className={styles.starPercentage}>
        <div className={styles.filled} style={{width: `${(props.count/props.length * 100)}%`}}></div>
      </div>
      <div className={styles.starCount}>{props.count}</div>
    </li>
  </div>
);

export default StarListEntry;