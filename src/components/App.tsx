import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from "../pages/HomePage";
import { DetailInformation } from "../pages/DetailInformation";
import { Favorites } from "../pages/Favorites";


export function App():JSX.Element {


  return (
   <Fragment>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/:id" element={ <DetailInformation /> } />
            <Route path="/favorites" element={ <Favorites /> } />
        </Routes>
   </Fragment>
  );
}

