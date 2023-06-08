import React from "react";

interface Props {
  params: {
    boardid: string;
  };
}

export default function Board({ params: { boardid } }: Props) {
  return <div className="text-white">page {boardid}</div>;
}
