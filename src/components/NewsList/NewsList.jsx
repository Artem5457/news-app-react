import { NewsItem } from '../NewsItem/NewsItem.jsx';
import styles from './NewsList.module.scss';

export function NewsList({news}) {
  return (
    <ul className={styles.list}>
      {news.map(item => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
