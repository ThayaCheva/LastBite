import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Checkout from "@/components/Checkout";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section id="front-page">
        <div className="landing-page">
          <div className="nav-bar">
            <div className="btn-container">
              <button
                className="sign-btn sign-up"
                onClick={() => {
                  router.push("/sign-in");
                }}
              >
                <p>SIGN UP</p>
              </button>
              <button
                className="sign-btn sign-in"
                onClick={() => {
                  router.push("/sign-in");
                }}
              >
                SIGN IN
              </button>
            </div>
          </div>
          <div className="welcome">
            <h1 className="intro">Welcome to</h1>
            <h1 className="name">LASTBITE</h1>
            <p>
              Savor Every Mouthful, End Food Waste In Full
            </p>
            <form className="address">
              <div className="add-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                    fill="rgba(173,184,194,1)"
                  ></path>
                </svg>
                <input
                  type="text"
                  id="address-input"
                  name="address"
                  placeholder="Enter your address"
                ></input>
              </div>
              <button className="submit-btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <About />
        <Footer />
      </section>
    </>
  );
}
