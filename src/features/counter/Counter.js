import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  randomize,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(randomize())}
        >
          Randomize
        </button>
      </div>
    </div>
  );
}
