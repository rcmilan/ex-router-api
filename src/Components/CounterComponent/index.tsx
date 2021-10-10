import React, { useState } from "react";

type Params = {
  id: string;
  htmlFor: string;
  labelText: string;
  register: object;
};

function CounterComponent({ id, htmlFor, labelText, register }: Params) {
  const [counterValue, setCounterValue] = useState(0);

  const addCounter = (increment: number) => {
    const newValue = counterValue + increment;

    setCounterValue(newValue);
  };

  return (
    <div className="custom-number-input h-10 w-32">
      <label
        htmlFor={htmlFor}
        className="w-full text-gray-700 text-sm font-semibold"
      >
        {labelText}
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={(e) => {
            e.preventDefault();
            addCounter(-1);
          }}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          id={id}
          type="text"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          {...register}
          autoFocus
          value={counterValue}
        />
        <button
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            addCounter(1);
          }}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;
