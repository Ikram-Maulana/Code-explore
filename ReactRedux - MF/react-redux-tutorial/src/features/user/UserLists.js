import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

const UserList = () => {
  return (
    <>
      <div className="my-6 md:my-8">
        <Button>
          <Link to="/add-user">Add User</Link>
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <UserItem />
        {/* {users.length ? (
          users.map((user) => <UserItem key={user.id} />)
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )} */}
      </div>
    </>
  );
};

export default UserList;
