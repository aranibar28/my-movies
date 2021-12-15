import React, { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";
import { URL_API, TOKEN } from "../../utils/constant";
import { Loading } from "../../components/Loading";
import { MovieCatalog } from "../../components/MovieCatalog";
import { PaginationMovie } from "../../components/Pagination";

export function NewMovies() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${TOKEN}&lenguage=es-ES&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row className="new-movies">
      <Divider orientation="left">Ultimos Lanzamientos</Divider>
      {movieList.results ? (
        <>
          <MovieCatalog movies={movieList} />
          <Divider>
            <PaginationMovie
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Divider>
        </>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}
    </Row>
  );
}
