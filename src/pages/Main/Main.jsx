import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx';
import styles from './Main.module.scss';
import { getNews } from '../../api/apiNews.js';
import {useLocalStorage} from '../../utils/hooks/useLocalStorage.jsx';
import { NewsList } from '../../components/NewsList/NewsList.jsx';
import { SkeletonView } from '../../components/SkeletonView/SkeletonView.jsx';
import { Pagination } from '@mui/material';

export function Main() {
  const [newsLS, setNewsLS] = useLocalStorage('news', []);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
    // const fetchNews = async () => {
    //   try {
    //     setIsLoading(true);
    //     const response = await getNews(2);
    //     setNews(response.news);
    //     setIsLoading(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    fetchNews();
  }, [newsLS]);

  const handleChange = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleNews = news.slice(startIndex, endIndex);

  return (
    <main className={styles.main}>
      {(news.length > 0 && !isLoading)
        ? <NewsBanner item={visibleNews[0]} />
        : <SkeletonView type="banner"/>
      }
      <Pagination
        count={Math.ceil(news.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChange}
      />
      {!isLoading
        ? <NewsList news={visibleNews}/>
        : <SkeletonView type="item" count={10}/>
      }
    </main>
  );
}
