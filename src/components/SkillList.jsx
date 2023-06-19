import Skill from "./Skill";

function SkillList() {
  return (
    <div>
      <ul className="skill-list">
        <Skill text="JavaScipt" bg="red" />
        <Skill text="React" bg="blue" />
        <Skill text="Aspnet with .Net" bg="pink" />
        <Skill text="Php Laravel" bg="deeppink" />
      </ul>
    </div>
  );
}

export default SkillList;
