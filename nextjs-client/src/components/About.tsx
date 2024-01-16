import Image from "next/image";
import Restaurant from "../../public/restaurant.jpg";
import Business from "../../public/business.png";
import User from "../../public/user.png";
import Guy1 from "../../public/guy1.png";
import Guy2 from "../../public/guy2.png";
import Guy3 from "../../public/guy3.jpg";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <section id="about">
      <div className="about-us">
        <Image className="about-img" src={Restaurant} alt="about-img"></Image>
        <div className="right-container">
          <h2>
            Our <span>Mission.</span>
          </h2>
          <p>
            LastBite aims to address the goal of achieving responsible
            consumption and production and helps us strive forward to achieve
            said goal. According to the UN nearly 17% of total food that is
            available to consumers is wasted at household, food service and
            retail levels. These unsustainable patterns of purchase and
            consumption can have many adverse affects as we are essentially
            wasting many of the resources involved in the production of food
            resources.
          </p>
        </div>
      </div>
      <div className="line-container">
        <div className="line-break"></div>
      </div>
      <div className="stats">
        <div className="users">
          <div className="stats-container">
            <div className="stats-item">
              <Image src={Guy1} alt="user"></Image>
              <h3>
                Over <span>200+</span> meals saved from the bin
              </h3>
            </div>
            <div className="stats-item">
              <Image src={Guy2} alt="user"></Image>
              <h3>
                Over <span>34</span> registered businesses
              </h3>
            </div>
            <div className="stats-item">
              <Image src={Guy3} alt="user"></Image>
              <h3>
                More than <span>5%</span> reduction in food waste worldwide
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="line-container">
        <div className="line-break"></div>
      </div>
      <div className="get-started">
        <h1 className="title">
          GET <span>STARTED</span>
        </h1>
        <div className="users">
          <div className="users-container">
            <div className="user-card">
              <Image src={User} alt="user"></Image>
              <h3>I'M A USER</h3>
              <p>
                Look for a good deal? Look no further than our website, where
                you can get started in just a few clicks.
              </p>
              <button
                onClick={() => {
                  router.push("/sign-in");
                }}
              >
                Sign Up
              </button>
            </div>
            <div className="user-card">
              <Image src={Business} alt="user"></Image>
              <h3>I'M A BUSINESS</h3>
              <p>
                Are you a company? Minimize food waste and maximize impact by
                sharing your surplus food.
              </p>
              <button>Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
