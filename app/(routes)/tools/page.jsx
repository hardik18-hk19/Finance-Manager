import React from "react";

const Tools = () => {
  // Creating Cards
  const tools = [
    {
      title: "",
      description: "",
      image: "",
      link: "",
    },
  ];

  return (
    <div className="">
      {/* Layout Created */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-6 p-5">
        <div className="rounded-lg bg-black text-white min-h-full ">T1</div>
        <div className="rounded-lg bg-black text-white min-h-full ">T1</div>
        <div className="rounded-lg bg-black text-white min-h-full ">T1</div>
        <div className="rounded-lg bg-black text-white min-h-full ">T1</div>
      </div>
    </div>
  );
};

export default Tools;
