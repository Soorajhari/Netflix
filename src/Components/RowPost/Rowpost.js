import React, { useEffect, useState } from "react";
import "../RowPost/Rowpost.css";
import axios from "axios";
import { API_KEY, imageUrl } from "../../Constants/constants";
import Youtube from "react-youtube";
// import { originals } from '../../Urls'

function Rowpost(props) {
  const [row, setRow] = useState([]);
  const [urlId, setUrlId] = useState();

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setRow(response.data.results);
    });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleTrailer = (id) => {
    console.log(id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("trailer not avaiable");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {row.map((item) => {
          return (
            <img
              onClick={() => handleTrailer(item.id)}
              className={props.size ? "smallPoster" : "poster"}
              src={`${imageUrl + item.backdrop_path}`}
              alt="poster"
            />
          );
        })}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Rowpost;
