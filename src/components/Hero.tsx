import img from "../assets/img4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <main className="h-screen my-auto">
      <div className="flex justify-center gap-20 mt-20">
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-[48px] font-[700] text-[#32cd32]">
            Front-End React <br /> Developer👋
          </p>
          <p className="">
            Hi, I'm Tibamwenda Anthony. A passionate front-end React <br />{" "}
            Developer based in Kamapala, Uganda. 📍
          </p>
          <p className="flex gap-2">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "#2375b3" }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "#1f242e" }}
            />
          </p>
        </div>
        <div className="rounded-full border-4 border-[#32cd32]">
          <img className="w-[400px] h-[400px] object-cover rounded-full" src={img} />
        </div>
      </div>
      <div className="flex gap-5 items-center ml-[150px] mt-5">
        <p className="px-4 font-[600] ">
          Tech Stack <span className="px-5">|</span>
        </p>
        <div className="flex gap-10">
          <FontAwesomeIcon
            icon={faHtml5}
            size="2xl"
            style={{ color: "#c22424" }}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            size="2xl"
            style={{ color: "#2480c6" }}
          />
          <FontAwesomeIcon
            icon={faJs}
            size="2xl"
            style={{ color: "#FFD43B" }}
          />
          <FontAwesomeIcon
            icon={faReact}
            size="2xl"
            style={{ color: "#74C0FC" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
