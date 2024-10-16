import { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState(11);
  const handleAdd = () => {
    const newPlayer = team + 1;
    setTeam(newPlayer);
  };

  const handleReduce = () => {
    const newPlayer = team - 1;
    setTeam(newPlayer);
  };
  const handleClear = () => {
    const newPlayer = 0;
    setTeam(newPlayer);
  };

  const teamStyle = {
    border: "2px solid tomato",
    margin: "10px",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players : {team} </h3>
      <button onClick={handleAdd} style={{ margin: "2px" }}>
        Add Player
      </button>
      <button onClick={handleReduce} style={{ margin: "2px" }}>
        Remove Player
      </button>
      <button onClick={handleClear} style={{ margin: "2px" }}>
        Clear All
      </button>
    </div>
  );
};

export default Team;
