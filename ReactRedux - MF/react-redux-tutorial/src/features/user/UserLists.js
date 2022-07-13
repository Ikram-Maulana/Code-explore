import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";
import { getUsers, usersSelector } from "./userSlice";

const UserList = () => {
  const users = useSelector(usersSelector.selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div className="my-6 md:my-8">
        <Button>
          <Link to="/add-user">Add User</Link>
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          users.map((user) => <UserItem key={user.id} {...user} />)
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </>
  );
};

export default UserList;
