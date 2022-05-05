import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import movieImg from "../../images/movie.jpg";

import "./Movies.css";

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList>
        <MoviesCard
          variant="success"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="success"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="save"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="save"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="save"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="success"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="success"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="save"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="save"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="save"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="success"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
        <MoviesCard
          variant="save"
          img={movieImg}
          duration="27"
          name="В погоне за Бенкси"
        />
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default Movies;
