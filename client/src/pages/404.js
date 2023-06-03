import React from "react";
import { Link } from "react-router-dom";
import Button from '../components/Button'
const NotFound = () => {
  return (
    <div className="min-w-[40vh] flex flex-col gap-4 m-10 p-10 justify-center items-center">
      <h1 className="text-2xl">404! Page not Found</h1>
      <Link to={`/`}>
        <Button>Go Back to HomePage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
