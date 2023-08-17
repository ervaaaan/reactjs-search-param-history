import { FC, useEffect, useState, useCallback } from "react";
import { NumberedSingleNewsInterface } from "../../types/singleNews";
import { useSearchParams } from "react-router-dom";
import classes from "./index.module.scss";
import NewsList from "../../components/NewsList";
import LoadingSpinner from "../../UI/Spinner";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { Search, Refresh } from "@mui/icons-material";

const TopStoriesPage: FC = () => {
  const [news, setNews] = useState<NumberedSingleNewsInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams("");

  const searchParam = searchParams.get("search");
  const searchInput = document.getElementById("search") as HTMLInputElement;
  if (searchInput !== null) {
    searchInput.value = searchParam !== null ? decodeURIComponent(searchParam) : "";
  }

  const fetchNews = useCallback(async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
      const storyIds = await response.json();

      const promises = storyIds.slice(0, 10).map((id: number, index: number) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response) => response.json())
          .then((data) => ({ number: index + 1, ...data }))
      );

      let data = await Promise.all(promises);

      // Filter id & title based on search param
      if (searchParam !== null) {
        data = data.filter(
          (newsData) =>
            newsData.id.toString().includes(decodeURIComponent(searchParam)) ||
            newsData.title.toLowerCase().includes(decodeURIComponent(searchParam))
        );
      }

      setNews(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("There was an error fetching the news. Please try again later.");
      setNews([]);
      setLoading(false);
    }
  }, [searchParam]);

  let searchTimeout: any;
  const handleSearch = (keyword: string) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      if (keyword === "") {
        // Delete search param
        searchParams.delete("search");
      } else {
        // Add search param
        searchParams.set("search", encodeURIComponent(keyword));
      }

      setSearchParams(searchParams);
    }, 3000);
  };

  const handleRefreshClick = () => {
    fetchNews();
  };

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <section className={classes["news-list"]}>
      <div className={classes.toolbar}>
        <p className={classes.title}>Top Stories:</p>
        <div className={classes.tools}>
          <Input
            id="search"
            placeholder="Type id or title"
            className={classes.search}
            onChange={(e: { target: { value: string } }) => handleSearch(e.target.value)}>
            <Search />
          </Input>
          <Button className={classes.button} onClick={handleRefreshClick}>
            Refresh
            <Refresh className={classes["refresh-icon"]} sx={{ fontSize: "1.3rem" }} />
          </Button>
        </div>
      </div>
      {loading && <LoadingSpinner />}
      {!loading && error && <p className={classes.error}>{error}</p>}
      {!loading && !error && news.length > 0 && <NewsList news={news} />}
      {!loading && !error && news.length === 0 && <p className={classes.empty}>No news available.</p>}
    </section>
  );
};

export default TopStoriesPage;
