import React from "react";
import image from "../../assets/images.png";

const CardNews = (props) => {
  return (
    <div className="rounded-md shadow-md card bg-base-100">
      <img src={image} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">Ini Judul</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
