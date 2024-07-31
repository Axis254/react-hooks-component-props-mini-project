import React from "react";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={image || defaultImage} alt="blue logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
