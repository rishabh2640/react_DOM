import React from 'react'

function Card({username, Heading="Heading need to enter"}) {
  return (
    <div className="max-w-xs p-3 rounded-md shadow-md bg-green-900 mb-4">
        <img
          src="https://images.pexels.com/photos/30688446/pexels-photo-30688446/free-photo-of-misty-mountain-peak-in-the-swiss-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mountains"
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{Heading}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
  )
}

export default Card