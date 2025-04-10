import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx';
import styles from './Main.module.scss';
import { getNews } from '../../api/apiNews.js';
import {useLocalStorage} from '../../utils/hooks/useLocalStorage.jsx';
import { NewsList } from '../../components/NewsList/NewsList.jsx';

export function Main() {
  const [newsLS, setNewsLS] = useLocalStorage('news', []);
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log(newsLS);
    setNews(newsLS);
  }, [newsLS]);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news}/>
    </main>
  );
}
