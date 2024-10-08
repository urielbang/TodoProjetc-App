import React from "react";
import img from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjetcSelected({ onStartProject }) {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img
        className="2-16 h-16 object-contain mx-auto"
        src={img}
        alt="empty task"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartProject}>Create new project</Button>
      </p>
    </div>
  );
}
