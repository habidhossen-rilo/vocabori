import React from "react";

const Loading = () => {
  return (
    <div className="mx-auto my-20 grid max-w-6xl grid-cols-1 gap-6 p-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="p-shadow-md flex animate-pulse flex-col items-center rounded-lg bg-gray-100"
        >
          <div className="mb-4 h-40 w-full rounded-md bg-gray-200"></div>
          <div className="mb-2 h-4 w-3/4 rounded bg-gray-200"></div>
          <div className="mb-4 h-4 w-2/4 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
