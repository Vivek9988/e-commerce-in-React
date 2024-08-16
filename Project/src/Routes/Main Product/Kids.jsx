import React from 'react'
import Kidsdata from '../../APIs/Kids.js'

const Kids = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly gap-4 mt-3">
        {Kidsdata.map(card => (
          <div key={card.id} className="w-64 rounded overflow-hidden shadow-lg bg-grey">
            <img className="w-full h-40 object-cover" src={card.image} alt={card.title} />
            <div className="px-6 py-4 flex flex-col justify-between h-48">
              <div>
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">
                  {card.description}
                </p>
              </div>
              <div className="">
                <p>{card.price}</p>
              </div>

              <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded block text-center'>Byu Now</button>

              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Kids
