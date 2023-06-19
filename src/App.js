import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Salamatou Amadou"
          desc="Fullstack web dev and teacher on udemy. When not coding
        or praparing a course, I like to play board game, to cook and eat
        or to just enjoy the portegues sun on beach"
        />

        <SkillList />
      </div>
    </div>
  );
}

export default App;
