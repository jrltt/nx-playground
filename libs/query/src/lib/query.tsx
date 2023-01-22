import styles from './query.module.scss';

/* eslint-disable-next-line */
export interface QueryProps {}

export function Query(props: QueryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Query!</h1>
    </div>
  );
}

export default Query;
