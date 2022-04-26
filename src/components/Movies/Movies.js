import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

import "./Movies.css";

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList>
        <MoviesCard />
      </MoviesCardList>
      <Preloader />
      <Footer />
    </>
  );
}

export default Movies;
