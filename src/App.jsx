// src/App.jsx
import { useReducer, useState } from "react";
import './App.css';

const zombieFighters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]; 


const App = () => {
  const [team, setTeam] = useState ([])
  const [fighters, setFighters] = useState (zombieFighters)
  const [money, setMoney] = useState(100)
  
  const handleAddFighter = (fighter) => {
      if (money < fighter.price) {
          console.log("not enough money")} else {
          //1. deduct money 
          setMoney(money-fighter.price)

          //2. add new fighter to "Team" > update status 
          setTeam((previousTeam) => [...previousTeam, fighter]);
    
          //3. remove fighter from the original list, and keep if the id !== selected fighter ID > temp array (updatedFighers) > update status 
          setFighters((previousFighters) => previousFighters.filter((y) => y.id !== fighter.id))
          }
      }; 
  
  let teamDisplay;  
  if (team.length === 0) {
        teamDisplay = <p>Pick some team members</p>
      } else {
        teamDisplay = (
        <section className="fighters-container">
        
          {team.map ((fighter) => (
          <div className="fighter-card" key={fighter.id}>
            <img src={fighter.img} alt={fighter.name}/>
        
          <div className="fighter-info">
            <span>{fighter.name}</span>
            <span>Price: {fighter.price}</span>
            <span>Strength: {fighter.strength}</span>
            <span>Agility: {fighter.agility}</span>
          </div>

          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </div>
          ))}
        </section> 
        )
      };






      let strengthDisplay;
      if (team.length === 0) { 
        strengthDisplay = 0} else {
        strengthDisplay= team.reduce((total, fighter) => {
        return total + fighter.strength
      },0)}

      let strengthAgility;
      if (team.length === 0) { 
        strengthAgility = 0} else {
        strengthAgility= team.reduce((total, fighter) => {
        return total + fighter.agility
      },0)}

  const handleRemoveFighter = (fighter) => {
          //1. add back money 
          setMoney(money + fighter.price)

          //2. remove fighter from the team 
          setTeam(team.filter(y => y.id !== fighter.id));
    
          //3. add fighter to the original list 
          setFighters((previousFighters) => [...previousFighters, fighter]);  
        };

  return (
  <>
    <h1>Zombie Fighters</h1>
    <h2>Money: {money}</h2>
    <h2>Team Strength: {strengthDisplay}</h2>
    <h2>Team Agility: {strengthAgility}</h2>
    <h2>Team: </h2>
    {teamDisplay}    
    <h2>Fighters</h2>
    <section className="fighters-container">
      {fighters.map ((fighter) => (
        <div className="fighter-card" key={fighter.id}>
            <img src={fighter.img} alt={fighter.name}/>
        
          <div className="fighter-info">
            <span>{fighter.name}</span>
            <span>Price: {fighter.price}</span>
            <span>Strength: {fighter.strength}</span>
            <span>Agility: {fighter.agility}</span>
          </div>

          <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </div>
      ))}
      </section>
  </> 
  );
  };
export default App
