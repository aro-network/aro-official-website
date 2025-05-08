// components/Skeleton.js
import React from "react";

export default function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );
}
