import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetfilxoriginals}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRoteMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchactions} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchcomedymovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchhorrormovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchromancemovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchactions} />
      <Row title="Documentaries" fetchUrl={requests.fetchdocumentaries} />
    </>
  );
};

export default RowList;
