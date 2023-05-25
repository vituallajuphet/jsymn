import React, { FC } from "react";
import { Link } from "react-router-dom";

type BreadcrumbsProps = {
  current?: string;
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ current, ...rest }) => {
  return (
    <div className="p-4 py-3 bg-[#e6f6fb]">
      <div className="flex flex-row gap-2">
        <Link to={"/"}>
          <div className="flex flex-row gap-2 items-center justify-center text-[#1195be]">
            <span>
              <i className="fas fa-home"></i>
            </span>
            <span>Home</span>
          </div>
        </Link>
        <span className="text-sm flex items-center justify-center">
          <i className="fas fa-chevron-right"></i>
        </span>
        <div className="flex flex-row gap-2 items-center justify-center text-gray-700">
          <span>{current}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
