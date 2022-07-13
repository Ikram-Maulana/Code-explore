import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ id, name, email }) => {
  return (
    <div className="bg-gray-300 p-5 flex items-center justify-between rounded-md">
      <div>
        <h3 className="font-bold text-lg text-gray-700">{name}</h3>
        <span className="font-normal text-gray-600 lg:hidden">
          {email.length > 16 ? `${email.substring(0, 13)}...` : email}
        </span>
        <span className="font-normal text-gray-600 hidden lg:inline">
          {email}
        </span>
      </div>
      <div className="flex gap-1 md:gap-2">
        <Link to={`/edit-user/${id}`}>
          <Button color="light">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </Button>
        </Link>
        <Button color="light">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default UserItem;
