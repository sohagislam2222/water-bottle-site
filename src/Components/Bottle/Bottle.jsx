import { useState } from 'react';

/* eslint-disable react/prop-types */
const Bottle = ({ bottle, handleSelectCards }) => {
  const { img, name, price, seller, stock } = bottle;
  const [isSelect, setIsSelect] = useState(false);

  const handleStock = () => {
    setIsSelect(true);
  };
  console.log(isSelect);
  const mainStock = isSelect ? stock - 1 : stock;
  console.log(mainStock);
  return (
    <>
      <div>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="flex justify-between items-center gap-2 ">
              <div>
                <h3 className="font-bold">Price: ${price}</h3>
              </div>
              <div>
                <p>Seller: {seller}</p>
                <p>Stock: {mainStock} </p>
              </div>
            </div>

            <div className="card-actions justify-center">
              <button
                onClick={() => {
                  handleSelectCards(bottle);
                  handleStock();
                }}
                className="btn btn-primary w-full"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottle;
