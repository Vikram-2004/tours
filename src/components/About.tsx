import Reveal from "@/lib/Reveal";
import { FC } from "react";

interface TestimonialProps {}

const About: FC<TestimonialProps> = ({}) => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center h-full w-full items-center gap-12">
        <div className="w-1/2 h-[30%] bg-black rounded-md text-white">
          <Reveal>
            <h2>Endless Exploration</h2>
            <p>
              Access a diverse range of virtual tours to countless destinations
              around the world. Immerse yourself in various cultures, landmarks,
              and historical sites without leaving your home.
            </p>
          </Reveal>
        </div>

        <div className="w-1/2 h-[30%] bg-black">hello hoi</div>
      </div>
    </div>
  );
};

export default About;
