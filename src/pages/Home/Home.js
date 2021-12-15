import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { SliderMovies } from "../../components/SliderMovies";
import { MovieList } from "../../components/MovieList";
import { URL_API, TOKEN } from "../../utils/constant";
import { Row, Col } from "antd";

export function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${TOKEN}&language=es-ES&page=1`
  );

  const popularwMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${TOKEN}&language=es-ES&page=1`
  );

  const topRatedwMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${TOKEN}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Películas Populares" movies={popularwMovies} />
        </Col>
        <Col span={12}>
          <MovieList
            title="Top 20 Mejores Películas del momento"
            movies={topRatedwMovies}
          />
        </Col>
      </Row>
    </>
  );
}
