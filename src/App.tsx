// modules
import { useState } from "react";
import {
  HeaderWidget,
  TokenomicsWidget,
  JustRelaxWidget,
  FooterWidget,
  MemesWidget
} from "./modules/header/widgets";

// styles
import "./styles/styles.scss";

import RocketAnimation from "./components/RocketAnimation";

function App() {
  const [showRocketAnimation, setShowRocketAnimation] = useState(false);

  return (
    <div>
      <HeaderWidget />
      <TokenomicsWidget />
      <JustRelaxWidget setShowRocketAnimation={setShowRocketAnimation} />
      <MemesWidget />
      <FooterWidget />

      {showRocketAnimation && (
        <RocketAnimation
          showRocketAnimation={showRocketAnimation}
          setShowRocketAnimation={setShowRocketAnimation}
        />
      )}
    </div>
  );
}

export default App;
