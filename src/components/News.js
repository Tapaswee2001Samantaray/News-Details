import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

function News({ pageSize }) {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  let getDetails = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bc37fab760ca4cd690bb9a80e10dcc70&page=1&pageSize=${pageSize}`;
    setLoading(true);
    let getData = await fetch(url);
    let parsedData = await getData.json();
    setLoading(false);
    setData(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  }

  useEffect(() => {
    getDetails();
  });

  async function handleNextClick() {

    if (!(page + 1 > Math.ceil(totalResults / pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bc37fab760ca4cd690bb9a80e10dcc70&page=${page + 1}&pageSize=${pageSize}`;
      setLoading(true);
      let getData = await fetch(url);
      let parsedData = await getData.json();
      setLoading(false);
      setData(parsedData.articles);
      setPage(page + 1);
    }
  }

  async function handlePrevClick() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bc37fab760ca4cd690bb9a80e10dcc70&page=${page - 1}&pageSize=${pageSize}`;
    setLoading(true);
    let getData = await fetch(url);
    let parsedData = await getData.json();
    setLoading(false);
    setData(parsedData.articles);
    setPage(page - 1);
  }

  return (
    <div className="container my-3">
      <h1 className="text-center">News Monkey - Top Head Lines</h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading && data.map((element) => {
          return (
            <div className="col-md-4 my-3" key={element.url}>
              <NewsItem
                title={element.title !== null ? element.title : ""}
                description={element.description !== null ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          )
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Pervious
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &larr;
        </button>
      </div>
    </div>
  );
}

export default News;
