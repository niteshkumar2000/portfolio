import React from "react";

function TeckStackPill({ content }) {
  return (
    <div
      style={{ background: "#ffb800" }}
      className="p-2 text-sm rounded-full text-black"
    >
      {content}
    </div>
  );
}

export default TeckStackPill;
