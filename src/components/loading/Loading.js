import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./loading.css";

export default function Loading({ height }) {
  return (
    <div className="skeleton_wrap">
      <Skeleton height={height ? height : 550} />
    </div>
  );
}
