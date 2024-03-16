const Cards = ({ cards, handleRemove }) => {
  return (
    <div>
      <div className="font-bold">
        <table className="">
          <thead className="  p-3 text-center">
            <tr>
              <th className=" w-10 tracking-wide text-center ">No</th>
              <th className="w-52 tracking-wide text-center  ">Name</th>
              <th className="p-2 tracking-wide text-center  ">Price</th>
              <th className="w-28 tracking-wide text-center   "></th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={card.id}>
                <td className=" tracking-wider p-3  border-2">{index + 1}</td>

                <td className="tracking-wider p-2 border-2">{card.name}</td>
                <td className="tracking-wider p-2  border-2">{card.price}</td>
                <td className="tracking-wider p-2  border-2">
                  <button
                    onClick={() => handleRemove(card)}
                    className="btn btn-primary"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="divider my-3"></div>

      <div className="text-lg font-bold">
        Total Price:{cards.reduce((a, b) => a + b.price, 0)}
      </div>
    </div>
  );
};

export default Cards;
