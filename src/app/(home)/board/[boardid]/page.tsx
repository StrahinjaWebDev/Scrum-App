import React from "react";

interface Props {
  params: {
    boardid: string;
  };
}

export const page = ({ params: { boardid } }: Props) => {
  return <div className="text-white">page {boardid}</div>;
};

export default page;
