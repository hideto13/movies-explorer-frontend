import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { register, login } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(false);
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

  function onLogin({ email, password }) {
    login({
      email,
      password,
    })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          // addApi(data.token);
          setLoggedIn(true);
          // setCurrentEmail(email);
          navigate("/movies");
        } else {
          setSuccess(false);
          openInfoPopup();
        }
      })
      .catch(() => {
        setSuccess(false);
        openInfoPopup();
      });
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Register onRegister={onRegister} />} />
        <Route path="/signin" element={<Login onLogin={onLogin} />} />
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
