/** @format */

import img from "./images/moon.jpg";
import img2 from "./images/astronaut1.png";
import { gsap } from "gsap";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".para", {
      y: 320,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
      stagger: {
        amount: 0.8,
      },
    });
  });
  return (
    <div className="App w-full h-screen">
      <div className="relative w-full h-full">
        <img src={img} />
      </div>
      <div className="para flex absolute top-0 h-full w-full items-center justify-center">
        <div className=" flex h-[400px] w-[700px] bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 items-center justify-center">
          <p className="text-2xl text-white font-bold  leading-loose">
            Hey folks,
            <br />
            Isn't this awesome.. 🤩🤩
            <br />
            Wanna create this UI? <br />
            I've provided the link to the GitHub
            <br /> repo in the blog.
            <br />
          </p>
        </div>
        <img src={img2} className="absolute right-28" />
      </div>
    </div>
  );
}

export default App;
