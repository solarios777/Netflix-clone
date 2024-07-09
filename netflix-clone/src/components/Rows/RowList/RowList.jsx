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
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Comedy MOvies" fetchUrl={requests.fetchComedyMOvies} />
      <Row title="Crime MOvies" fetchUrl={requests.fetchCrimeMOvies} />
      <Row title="Drama MOvies" fetchUrl={requests.fetchDramaMOvies} />
      <Row title="Family MOvies" fetchUrl={requests.fetchFamilyMOvies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrormovies} />
      <Row title="Mystery MOvies" fetchUrl={requests.fetchMysteryMOvies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="War MOvies" fetchUrl={requests.fetchWarMOvies} />
    </>
  );
}

export default RowList
