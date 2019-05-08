import React, {useState, useEffect} from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getArtworks();
  }, []);

  const getArtworks = () => {
    return fetch('http://localhost:4008/artworks')
      .then(resBuffer => resBuffer.json())
      .then(res => {
        setArtworks(res.artworks);
      })
      .catch(error => console.log({error}))
  };

  return (
    <section className="home">
      {artworks.map((artpiece, index) => {
        const { name, image } = artpiece;
        return (
          <Link to={`art/${index}`} key={name+index}>
            <section className="preview">
              <img className="preview-image" src={image} alt={name} />
              <h4 className="preview-name">{name}</h4>
            </section>
          </Link>
        );
      })}
    </section>
  );
};

export default Home;
