import styles from './style.module.css';

export const Error = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className={styles['error-wrapper']}>
      <h1>Sorry.. there was an error:</h1>
      <h2>{errorMessage}</h2>
      <button>Try again</button>
    </div>
  );
};
