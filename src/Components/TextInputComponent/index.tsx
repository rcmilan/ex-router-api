import React from "react";
import { FieldError } from "react-hook-form";

type Params = {
  id: string;
  htmlFor: string;
  labelText: string;
  placeholder: string;
  register: object;
  error: FieldError | undefined;
};

function TextInputComponent({
  id,
  htmlFor,
  labelText,
  placeholder,
  register,
  error,
}: Params) {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={htmlFor}
      >
        {labelText}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={id}
        type="text"
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
    </>
  );
}

export default TextInputComponent;
