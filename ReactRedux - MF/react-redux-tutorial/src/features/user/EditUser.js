import { Label, TextInput } from "flowbite-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FormButton from "./FormButton";
import { getUsers, updateUser, usersSelector } from "./userSlice";

const EditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const user = useSelector((state) => usersSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const onSubmit = async (data) => {
    await dispatch(updateUser({ ...data, id }));
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
            defaultValue={user.name}
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
            defaultValue={user.email}
          />
          {errors.email && (
            <span className="font-medium text-sm text-red-700">
              * This field is required
            </span>
          )}
        </div>
        <FormButton payload="Update" />
      </form>
    </div>
  );
};

export default EditUser;
