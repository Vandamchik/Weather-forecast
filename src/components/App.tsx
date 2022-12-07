import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from "../pages/HomePage";
import { DetailInformation } from "../pages/DetailInformation";
import { Favorites } from "../pages/Favorites";
import { Navigation } from "./Navigation";


export function App():JSX.Element {

  return (
   <Fragment>
       <Navigation />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/:id" element={ <DetailInformation /> } />
            <Route path="/favorites" element={ <Favorites /> } />
        </Routes>
   </Fragment>
  );
}

