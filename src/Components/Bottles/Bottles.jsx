import Bottle from '../Bottle/Bottle';

// eslint-disable-next-line react/prop-types
const Bottles = ({ bottles, handleSelectCards }) => {
  return (
    <>
      <div>Bottles:{bottles.length}</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {bottles.map(bottle => (
          <div key={bottle.id}>
            <Bottle
              bottle={bottle}
              handleSelectCards={handleSelectCards}
            ></Bottle>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bottles;
