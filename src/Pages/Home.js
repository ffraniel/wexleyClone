import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import artworks from '../Artworks';

const Home = () => (
  <section className="home">
    {artworks.map((artpiece, index) => {
      const {name, image} = artpiece;
      return (
        <Link to={`art/${index}`}>
          <section className="preview">
            <img className="preview-image" src={image} alt={name} />
            <h4 className="preview-name">{name}</h4>
          </section>
        </Link>
      )
    })}
  </section>
);
export default Home;