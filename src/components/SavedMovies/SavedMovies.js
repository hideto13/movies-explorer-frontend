import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList>
        <MoviesCard />
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
