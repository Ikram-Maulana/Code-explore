import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import FormButton from "./FormButton";

const EditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mt-10 max-w-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name:" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Type your name..."
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="font-medium text-sm text-red-700">
              * This field is required
            </span>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email:" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Type your email..."
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="font-medium text-sm text-red-700">
              * This field is required
            </span>
          )}
        </div>
        <FormButton />
      </form>
    </div>
  );
};

export default EditUser;
