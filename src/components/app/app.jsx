import React from "react";
import WelcomeScreen from "./welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {gameTime, errorsCount} = props;

  return <WelcomeScreen
    time={gameTime}
    errorsCount={errorsCount}
  />;
};

export default App;
