import React, {useState, useEffect} from "react";
import "./Art.css";
import { Link } from "react-router-dom";

const Art = (props) => {
  
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const artIndex = props.match.params.index;
  const indexNum = parseInt(artIndex);
  
  useEffect(() => {
    getArtworks();
  }, []);

  const getArtworks = () => {
    return fetch('http://localhost:4008/artworks')
      .then(resBuffer => resBuffer.json())
      .then(res => {
        const indexedArt = res.artworks.map((artObj, i) => {
          let newArtObj = artObj;
          newArtObj.index = i;
          return newArtObj;
        });
        setArtworks(indexedArt);
        setLoading(false);
      })
      .catch(error => console.log({error}))
  };

  const imageLoaded = (e) => {
    console.log(e)
  };


  if (loading) {
    return (<h1>Loading</h1>)
  };
  const {name, image} = artworks[indexNum];

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