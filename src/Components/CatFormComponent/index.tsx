import React from "react";
import { Cat } from "../../Types/Cat";
import { useForm, SubmitHandler } from "react-hook-form";

const CatFormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Cat>();

  const submitForm: SubmitHandler<Cat> = (data) => {
    if (!!errors) console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-full max-w-lg m-10">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nome do felino
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Nome"
            {...register("name", {
              required: { value: true, message: "Campo obrigatório" },
              minLength: { value: 2, message: "Minimo 2 caracteres" },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">aaaaa</div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Enviar"
        />
      </div>
    </form>
  );
};

export default CatFormComponent;
