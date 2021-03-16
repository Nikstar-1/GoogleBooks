import React from "react";

const styles = {
  image: {
    margin: 20,
    height: "200px",
    width: "200px",
  },
};

function CardDisplay({id, title, authors, link, image, description, Button}) {
  return (
    <div className="card" id={id} key={id}>
      <div className="img-container">
        <h5>{title}</h5>
        <h6>{authors}</h6>
      <Button />
        <a href={link}>
          <img alt={title} src={image} style={styles.image} />
        </a>
        <p>
          <a href={link}>View Book</a>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardDisplay;
