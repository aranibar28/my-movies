import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Divider, Row, Input } from "antd";
import queryString from "query-string";
import { MovieCatalog } from "../../components/MovieCatalog";
import { URL_API, TOKEN } from "../../utils/constant";
import "./Search.scss";

export function Search(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { q } = searchValue.query;
      const response = await fetch(
        `${URL_API}/search/movie?api_key=${TOKEN}&language=es-ES&query=${q}&page=1`
      );
      const movies = await response.json();
      setSearchValue(q);
      setMovieList(movies);
    })();
  }, [location.search]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.q = e.target.value;
    navigate(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <h1>Busca tu pelicula</h1>
      <Input value={searchValue} onChange={onChangeSearch} />
      <Divider />
      <Row className="new-movies">
        {movieList.results && <MovieCatalog movies={movieList} />}
      </Row>
    </>
  );
}
