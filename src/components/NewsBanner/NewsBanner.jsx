import styles from './NewsBanner.module.scss';
import {formatTimeAgo} from '../../utils/helpers/FormatTimeAgo.js';
import { Image } from '../Image/Image.jsx';

export function NewsBanner({item}) {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}
