import React from 'react';

function NewsItem({ title, description, imageUrl, newsUrl }) {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl !== null ? imageUrl : "https://images.hindustantimes.com/tech/img/2023/07/04/1600x900/1_1657962533894_1688440175056.jpg"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
