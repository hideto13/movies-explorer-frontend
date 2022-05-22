import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { register, login, getUser, updateUser } from "../../utils/MainApi";
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
  const [currentUser, setCurrentUser] = React.useState({});
  const [infoPopupOpen, setInfoPopupOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  function openInfoPopup() {
    setInfoPopupOpen(true);
  }

  function closeInfoPopup() {
    setInfoPopupOpen(false);
  }

  function onUpdateUser({ name, email }) {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      updateUser(jwt, email, name)
        .then(({ name, email }) => {
          setCurrentUser({ name, email });
          setSuccess(true);
          openInfoPopup();
        })
        .catch((err) => {
          setSuccess(false);
          openInfoPopup();
        });
    }
  }

  function handleUserCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getUser(jwt)
        .then(({ name, email }) => {
          setCurrentUser({ name, email });
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  }

  function onRegister({ name, email, password }) {
    register({
      name,
      email,
      password,
    })
      .then(() => {
        onLogin({ email, password });
      })
      .catch(() => {
        setSuccess(false);
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
          setLoggedIn(true);
          handleUserCheck();
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
  function onLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/");
  }

  React.useEffect(() => {
    handleUserCheck();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
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
              <Profile
                currentUser={currentUser}
                onUpdateUser={onUpdateUser}
                onLogout={onLogout}
              />
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
