import { useState, useEffect } from "react";
import { Transition, Container } from "semantic-ui-react";
import IntroCard from "./IntroCard";
const Home = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div>
      <img
        className="ui bordered image"
        src="/background.jpg"
        alt="image not available"
      />

      <IntroCard />
    </div>
  );
};

export default Home;
