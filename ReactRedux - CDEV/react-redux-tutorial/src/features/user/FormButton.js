import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const FormButton = () => {
  return (
    <div className="w-full flex justify-between">
      <Link to="/">
        <Button color="light">
          <div className="mr-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>{" "}
          Back
        </Button>
      </Link>
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default FormButton;
