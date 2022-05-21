import React from "react";
import { Route, Routes } from "react-router-dom";
import { register } from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import "./App.css";

function App() {
  const [infoPopupOpen, setInfoPopupOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  function openInfoPopup() {
    setInfoPopupOpen(true);
  }

  function closeInfoPopup() {
    setInfoPopupOpen(false);
  }

  function onRegister({ name, email, password }) {
    register({
      name,
      email,
      password,
    })
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setSuccess(false);
      })
      .finally(() => {
        openInfoPopup();
      });
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register onRegister={onRegister} />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <InfoTooltip
        isOpen={infoPopupOpen}
        success={success}
        onClose={closeInfoPopup}
      />
    </div>
  );
}

export default App;
