import './App.css';
import { useState } from 'react';

const App = () => {

  const cardPairs = [
    {Q: "Amendment 1", A: "Freedom of Religion, Speech, Press, Assembly, and Petition"},
    {Q: "Amendment 2", A: "Right to bear arms"},
    {Q: "Amendment 3", A: "Restrict Quartering of soldiers"},
    {Q: "Amendment 4", A: "Prohibit Search and Seizures"},
    {Q: "Amendment 5", A: "Right to Due Process"},
    {Q: "Amendment 6", A: "Right to Speedy Trial"},
    {Q: "Amendment 7", A: "Right to a Jury"},
    {Q: "Amendment 8", A: "Prohibt Excessive Fines and Cruel and Unusual Punishment"},
    {Q: "Amendment 9", A: "Rights not in the Constitution are retained by the People"},
    {Q: "Amendment 10", A: "Federal Govt only has powers through Constitution; all other powers for the states"},
  ]

  const [currCard, setCurrCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const showCard = () => {
    const cardIdx = Math.floor(Math.random() * cards.length);
    setCurrCard(cardIdx);
    setShowAnswer(false);
  }

  const toggleAnswer = () => {
    setCurrCard(prevState => !prevState);
  }

  const { Q, A } = cardPairs[currCard];


  return (
    <div className="App">
      <h1>Bill of Rights</h1>
      <h3>Do you remember the first 10 amendments?</h3>
      <h4>Number of cards: 10</h4>

      <div className="card">
        Card
      </div>
    </div>
  )
}

export default App;