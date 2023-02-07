import React from "react";

function Info() {
  return (
    <div className="info">
      <img
        src="https://pbs.twimg.com/profile_images/1569002059399335944/GzvP0d_9_400x400.jpg"
        alt="profile"
      />
      <h1>Akash</h1>
      <h2>Frontend Developer</h2>
      <p>
        <a href="https://github.com/AKASHGOWDA-007">akash.website</a>
      </p>
      <div className="social-icon">
        <button className="social">
          <i className="fa-solid fa-envelope mail"></i>
          <a href="mailto: g.akash712@gmail.com">Email</a>
        </button>
        <button className="social">
          <i className="fa-brands fa-linkedin linkedin"></i>
          <a href="https://www.linkedin.com/in/akash712/">Linkedin</a>
        </button>
      </div>
    </div>
  );
}

export default Info;
