import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { username } = useParams();
  return (
    <div className="text-center bg-gray-500 rounded-xl text-4xl p-6 text-white">
      User : {username}
    </div>
  );
}
