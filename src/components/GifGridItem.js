import React from "react";

const GifGridItem = ({ id, title, url }) => {
  console.log({ id, url, title });
  return (
    <div className="card animate__animated animate__fadeInDown">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
