import React from "react";

const styles = {
  image: {
    margin: 20,
    height: "200px",
    width: "200px",
  },
};

function CardDisplay(props) {
  return (
    <div className="card" id={props.id} key={props.id}>
      <div className="img-container">
        <h5>{props.title}</h5>
        <h6>{props.authors}</h6>

        <a href={props.link}>
          <img alt={props.title} src={props.image} style={styles.image} />
        </a>
        <p>
          <a href={props.link}>View Book</a>
        </p>
        <p onClick={() => props.handleSaveClick(props)}>Save Book</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CardDisplay;
