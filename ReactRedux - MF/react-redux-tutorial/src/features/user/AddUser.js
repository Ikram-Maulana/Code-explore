import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import { saveUser } from "./userSlice";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await dispatch(
      saveUser({
        ...data,
      })
    );
    navigate("/");
  };

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
        <FormButton payload="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
