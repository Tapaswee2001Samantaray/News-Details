import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function News() {

  const [data, setData] = useState([]);

  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=bc37fab760ca4cd690bb9a80e10dcc70";

  let getDetails = async () => {
    let getData = await fetch(url);
    let pasedData = await getData.json();
    setData(pasedData.articles);
  }

  useEffect(() => {
    getDetails();
  });

  return (
    <div className="container my-3">
      <h2>News Monkey - Top Head Lines</h2>
      <div className="row">
        {data.map((element) => {
          return (
            <div className="col-md-4 my-3" key={element.url}>
              <NewsItem
                title={element.title !== null ? element.title.slice(0, 45) : ""}
                description={element.description !== null ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default News;
