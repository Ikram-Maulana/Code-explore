import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmail.com",
  },
];

const UserList = () => {
  return (
    <>
      <div className="my-6 md:my-8">
        <Button>
          <Link to="/add-user">Add User</Link>
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          users.map((user) => <UserItem key={user.id} />)
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
