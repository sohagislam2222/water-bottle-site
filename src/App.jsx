import { useState } from 'react';
import Bottles from './Components/Bottles/Bottles';
import Cards from './Components/Cards/Cards';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Warning } from 'postcss';
function App() {
  const [bottles, setBottles] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data));
  }, []);

  const handleRemove = bottle => {
    const newCard = cards.filter(card => card.id !== bottle.id);
    setCards(newCard);
  };

  const handleSelectCards = bottle => {
    const isExist = cards.find(card => card.id == bottle.id);

    if (!isExist) {
      setCards([...cards, bottle]);
    } else {
      toast.warn('Already selected !');
    }
  };
  console.log(cards);
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-start gap-5 mt-8 ">
        <div className="w-full lg:w-[60%] bg-blue-200 rounded-lg p-5">
          <Bottles
            bottles={bottles}
            handleSelectCards={handleSelectCards}
            o
          ></Bottles>
        </div>
        <div className="w-full lg:w-[35%] bg-orange-100 rounded-lg p-5">
          <Cards cards={cards} handleRemove={handleRemove}></Cards>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
