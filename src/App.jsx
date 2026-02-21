// src/App.jsx
import { useState } from "react";

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
      setMoney ((previousMoney) => {
        if (previousMoney >= fighter.price) {
          //1. deduct money 
           const remainingMoney = previousMoney - fighter.price;
          
          //2. add new fighter to "Team" > update status 
          setTeam((previousTeam) => [...previousTeam, fighter]);
    
          //3. remove fighter from the original list, and keep if the id !== selected fighter ID > temp array (updatedFighers) > update status 
          setFighters(fighters.filter((y) => y.id !== fighter.id));

          return remainingMoney;
          
      } else {
        console.log("Not enough money");
        return previousMoney
      }
      })
    }; 
  
  let teamDisplay;  
  if (team.length === 0) {
        teamDisplay = <p>Pick some team members</p>
      } else {
        teamDisplay = (
        <section>
          {team.map((fighter) => (
          <ul key={fighter.id}>
          <li>
            <img src={fighter.img} alt={fighter.name}/>
          </li>
          <li>{fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
        </ul>
          ))}
        </section> 
        )
      }


  return (
  <>
    <h1>Zombie Fighters</h1>
    <p>Money: {money}</p>
    <p>Team Strength: 0</p>
    <p>Team Agility: 0</p>
    <p>Team: </p>
    {teamDisplay}    
    <p>Fighters</p>
    <section>
      {fighters.map ((fighter) => (
        <ul key={fighter.id}>
          <li>
            <img src={fighter.img} alt={fighter.name}/>
          </li>
          <li>{fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
          <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </ul>
      ))}
      </section>
  </> 
  );
  };
export default App
