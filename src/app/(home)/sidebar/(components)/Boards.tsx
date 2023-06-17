import Loader from "@/components/ui/Loader";
import { useAppSelector } from "@/redux/store";
import type { Board } from "@prisma/client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Boards = () => {
  const pathname = usePathname();
  const boards = useAppSelector((state) => state.boards) || [];

  return (
    <div className="mt-2">
      <p className="flex w-full pl-4 text-[13px] text-secondary hover:bg-dark-3">
        Your boards
      </p>
      {boards ? (
        boards.map((board: Board) => (
          <div key={board.id} className="p-1">
            <Link
              className={classNames(
                "text-stone-300 rounded-sm flex pl-4 w-[200px] font-medium text-[14px] hover:bg-dark-3 h-6",
                {
                  "bg-dark-3": `/board/${board.id}` === pathname,
                  "bg-none": `/board/${board.id}` !== pathname,
                }
              )}
              key={board.id}
              href={`/board/${board.id}`}
            >
              {board.name}
            </Link>
          </div>
        ))
      ) : (
        <Loader variant="primary" speed="default" size="sm" />
      )}
    </div>
  );
};

export default Boards;
