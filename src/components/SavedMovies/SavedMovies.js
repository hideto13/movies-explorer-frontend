import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList>
        <MoviesCard />
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
