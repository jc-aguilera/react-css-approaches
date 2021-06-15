import React from 'react'
import { ReactComponent as Logo } from '../assets/rabbit.svg'

export function MainPage() {
  return (
    <main>
      <section className="p-8 pb-4 block sm:flex sm:items-center sm:justify-center">
        <h1 className="text-4xl font-bold font-serif pb-4 sm:max-w-sm">We do this, so you can do that</h1>
        <div className="text-gray-500 text-sm text-center flex flex-col items-center sm:max-w-md">
          <div className="text-gray-600 pb-4 max-w-xs">
            <Logo />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.
          <button className="bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-gray-50 mt-4 w-full p-2 rounded-full shadow-lg md:max-w-sm">
            Subscribe!
          </button>
        </div>
      </section>
      <div className="sm:flex sm:justify-center">
        <section className="block p-8 max-w-lg sm:max-w-full py-4">
          <h1 className="text-xl text-center p-2 rounded-t-lg text-gray-50 bg-gradient-to-bl from-red-700 to-yellow-500">Card 1</h1>
          <div className="text-gray-700 text-justify border border-t-0 rounded-b-lg p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </section>
        <section className="block p-8 max-w-lg sm:max-w-full py-4">
          <h1 className="text-xl text-center p-2 rounded-t-lg text-gray-50 bg-gradient-to-br from-yellow-500 to-red-600">Card 2</h1>
          <div className="text-gray-700 text-justify border border-t-0 rounded-b-lg p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </section>
      </div>
    </main>
  )
}
