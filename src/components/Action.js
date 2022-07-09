import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/image/4000.jpg";
const Action = ({setisloading}) => {
  const [allmovies, setallmovies] = useState([]);
    const [error, seterror] = useState("");

  let url = "https://imdb-api.com/en/API/Top250Movies/k_pl6us4q0";
  //   let url1 = "https://imdb-api.com/en/API/YouTubeTrailer/k_mzl24b22/tt1375666";
  //   let url2 =
  //     "https://api.themoviedb.org/3/movie/550?api_key=d312274ffd68155661a0afa28a6da07f";
  //   let url3 = "https://api.github.com/users";
  //   let url4 = "https://imdb-api.com/en/API/Top250TVs/k_mzl24b22";
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      if (res.data.items.length===250) {
          console.log('Yes oo');
      setallmovies(res.data.items);
    //   setisloading(false);
      }else{
      console.log('An error occurs');
      }



    }).catch((err) => {
        seterror(err);
      })
  }, []);


  return (
    <>
      {allmovies.map((movie, ind) => (
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={movie.image}
            className="card-img-top"
            height={"250"}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted ">{movie.fullTitle}</h6>
            <p className="card-text">{movie.crew}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Action;
