import React from "react";
import PeliculasPopulares from "../components/PeliculasPopulares";
import PeliculasAccion from "../components/PeliculasAccion";
import PeliculasComedia from "../components/PeliculasComedia";
import PeliculasTerror from "../components/PeliculasTerror";
import PeliculasAnimadas from "../components/PeliculasAnimadas";

function Home() {
  return (
    <div>
      <h1 className="text-3xl text-center text-white mt-10 bg-orange-500/80">
        Peliculas Populares
      </h1>
      <PeliculasPopulares />
      <h1 className="text-3xl text-center text-white mt-4 bg-orange-500/80">
        Películas de Acción
      </h1>
      <PeliculasAccion />
      <h1 className="text-3xl  text-center text-white mt-4 bg-orange-500/80">
        Películas de Comedia
      </h1>
      <PeliculasComedia />
      <h1 className="text-3xl  text-center text-white mt-4 bg-orange-500/80">
        Películas de Terror
      </h1>
      <PeliculasTerror />
      <h1 className="text-3xl  text-center text-white mt-4 bg-orange-500/80">
        Películas Animadas
      </h1>
      <PeliculasAnimadas />
    </div>
  );
}

export default Home;