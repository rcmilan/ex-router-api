import React from "react";
import { Cat } from "../../Types/Cat";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInputComponent from "../TextInputComponent";
import CounterComponent from "../CounterComponent";

const CatFormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Cat>();

  const submitForm: SubmitHandler<Cat> = (data) => {
    if (!!errors) console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-full max-w-lg m-10">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <TextInputComponent
            id="name"
            htmlFor="name"
            labelText="Nome do Felino"
            placeholder="Nome"
            register={register("name", {
              required: { value: true, message: "Campo obrigatório" },
              minLength: { value: 2, message: "Mínimo 2 caracteres" },
            })}
            error={errors.name}
          />
        </div>

        <div className="w-full md:w-1/2 px-3">
          <CounterComponent
            id="age"
            htmlFor="age"
            labelText="Idade"
            setValue={setValue}
            register={register("age", { valueAsNumber: true })}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <TextInputComponent
            id="favActivity"
            htmlFor="favActivity"
            labelText="Atividade Favorita"
            placeholder="Atividade"
            register={register("favActivity", {
              required: { value: true, message: "Campo obrigatório" },
              minLength: { value: 5, message: "Mínimo 5 caracteres" },
              maxLength: { value: 100, message: "Máximo 100 caracteres" },
            })}
            error={errors.favActivity}
          />
        </div>
      </div>

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
