import React from "react";
import "./Art.css";
import { Link } from "react-router-dom";
import artworks from '../Artworks';

const indexedArt = artworks.map((artObj, i) => {
  let newArtObj = artObj;
  newArtObj.index = i;
  return newArtObj;
});

const Art = (props) => {
  const artIndex = props.match.params.index;
  const artObj = indexedArt[artIndex];
  const {name, image} = artObj;
  const indexNum = parseInt(artIndex);

  return (
  <section className="FullScreen-Art">
    <Link className="Back-Button"to="/">x</Link>
    <section className="Art-Piece">
      <img className="Art-Piece-Image" src={`/${image}`} alt={name} />
      <h4 className="Art-Piece-Name">{name}</h4>
      <p className="Art-Piece-Details">More information about the piece, it's history, and why the artist likes it</p>
      <p className="Art-Piece-Materials">Wood, on ash</p>
      <p className="Art-Piece-Size">12/4</p>
    </section>
    <Link className="prev" to={`/art/${indexNum-1}`} >Prev</Link> / <Link className="next" to={`/art/${indexNum+1}`} >Next</Link>
  </section>
  )
};
export default Art;