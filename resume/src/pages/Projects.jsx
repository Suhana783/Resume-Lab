import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-[800px] bg-white border border-black p-10">
        <h1 className="text-3xl font-bold mb-6">All Projects</h1>

        <ul className="list-disc ml-5 space-y-2">
          <li>To-Do-List (Full-Stack)</li>
          <li>Basic-Calculator (JavaScript)</li>
          <li>Simple-Blog (React)</li>
          <li>Portfolio Website (HTML, CSS)</li>
          <li>Task Manager (React + LocalStorage)</li>
        </ul>

        <div className="mt-8">
          <Link
            to="/"
            className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition"
          >
            Back to Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
