import styles from './Image.module.scss';

export function Image({ image }) {
  return (
    <div className={styles.wrapper}>
      {image
        ? <img src={image} alt='news' className={styles.image} />
        : null}
    </div>
  );
}
