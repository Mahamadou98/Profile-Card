function Skill({ text, bg }) {
  return (
    <li style={{ background: bg, color: "#fff" }} className="skill">
      <p>{text}</p>
    </li>
  );
}

export default Skill;
