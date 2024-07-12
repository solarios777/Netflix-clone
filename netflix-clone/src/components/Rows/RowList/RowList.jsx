import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utilis/requests'


const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchnetflixoriginals}
        islargeRow={true}
      />
      <Row title="TRENDING" fetchUrl={requests.fetchtranding} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMOvies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMOvies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrormovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMOvies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="War Movies" fetchUrl={requests.fetchWarMOvies} />
      <Row title="Documentaries" fetchUrl={requests.fetchdocumentaries} />
      <Row title="Music" fetchUrl={requests.fetchMusic} />
    </>
  );
}

export default RowList
