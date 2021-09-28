import React from "react";

function RecommendationCard({ content }) {
  return (
    <div className="bg-gray-900 p-5 rounded-lg">
      <span className="text-2xl">" </span>
      {content}
    </div>
  );
}

export default RecommendationCard;
