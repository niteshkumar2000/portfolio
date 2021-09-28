import React from "react";
import TeckStackPill from "./TeckStackPill";
function ProjectCard({ name, content, language, link }) {
  return (
    <div className="bg-gray-900 p-3 rounded-lg flex flex-col space-y-2">
      <div className="text-lg font-bold">{name}</div>
      {link ? (
        <div className="flex justify-center space-x-2">
          <a
            href={link}
            style={{ background: "#ffb800" }}
            className="text-black p-2 text-sm rounded-lg hover:no-underline hover:text-black"
          >
            Code
          </a>
        </div>
      ) : (
        <div></div>
      )}
      <div className="text-base">{content}</div>
      <div className="flex justify-center space-x-2 mb-4 mt-2">
        {language?.map((item) => {
          return <TeckStackPill content={item} />;
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
