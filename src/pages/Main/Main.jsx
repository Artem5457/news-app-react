import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx';
import styles from './Main.module.scss';
import { getNews } from '../../api/apiNews.js';
import {useLocalStorage} from '../../utils/hooks/useLocalStorage.jsx';
import { NewsList } from '../../components/NewsList/NewsList.jsx';
import { SkeletonView } from '../../components/SkeletonView/SkeletonView.jsx';

export function Main() {
  const [newsLS, setNewsLS] = useLocalStorage('news', []);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = () => {
      try {
        setIsLoading(true);
        setNews(newsLS);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, [newsLS]);

  return (
    <main className={styles.main}>
      {(news.length > 0 && !isLoading)
        ? <NewsBanner item={news[0]} />
        : <SkeletonView type="banner"/>
      }
      {!isLoading
        ? <NewsList news={news}/>
        : <SkeletonView type="item" count={10}/>
      }
    </main>
  );
}
