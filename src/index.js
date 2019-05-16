import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app/app.jsx";

const init = () => {
  const settings = {
    gameTime: 5,
    errorsCount: 3
  };

  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorsCount={settings.errorsCount}
      />,
      document.querySelector(`.main`)
  );
};

init();
