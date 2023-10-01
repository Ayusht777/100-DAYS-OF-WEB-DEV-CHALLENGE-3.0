import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiJavascript,
  SiGithub,
  SiVite,
  SiVisualstudiocode,
} from "react-icons/si";

const SkillsSection = () => {
  return (
    <section className="box-border flex items-center justify-center w-full h-auto bg-bg lg:px-16" id="skills">
      <div className="flex flex-col items-center justify-center w-full h-auto lg:p-8 md:p-4">
        <div className="box-border flex flex-col items-center justify-center w-full h-auto gap-3 rounded-md cursor-pointer">
          <h4 className="w-full h-auto text-4xl font-bold text-center text-text">
            My Skills
          </h4>
          <p className="w-full h-auto text-center md:text-xl text-text">
            The tech stack that fuels my passion for creating
          </p>
        </div>
        {/* keyboard */}
        <div className=" w-4/5 h-auto py-16 grid grid-cols-3 grid-rows-3 place-items-center gap-4">
          <div className="box-border md:w-28 md:h-28 rounded-lg  w-20 h-20 bg-btnA border-[1px]  p-1  text-[#43C3EC] border-[#43C3EC] transition-colors hover:border-2 hover:animate-wiggle  duration-150 cursor-pointer flex justify-center items-center">
            <SiReact className="md:text-5xl text-3xl"></SiReact>
          </div>
          <div className="box-border md:w-28 md:h-28  rounded-lg w-20 h-20  bg-btnA border-[1px]  p-1  text-[#3BF2EE] border-[#3BF2EE] transition-colors hover:border-2 hover:animate-wiggle duration-150 cursor-pointer flex justify-center items-center">
            <SiTailwindcss className="md:text-5xl text-3xl"></SiTailwindcss>
          </div>
          <div className="box-border md:w-28 md:h-28 rounded-lg w-20 h-20  bg-btnA border-[1px]  p-1  text-[#FEC81E] border-[#FEC81E] transition-colors hover:border-2 hover:animate-wiggle duration-150 cursor-pointer flex justify-center items-center">
            <SiVite className="md:text-5xl text-3xl"></SiVite>
          </div>
          <div className="box-border md:w-28 md:h-28 rounded-lg w-20 h-20  bg-btnA border-[1px]  p-1  text-[#CD669A] border-[#CD669A] transition-colors hover:border-2 hover:animate-wiggle duration-150 cursor-pointer flex justify-center items-center">
            <SiSass className="md:text-5xl text-3xl"></SiSass>
          </div>
          <div className="box-border md:w-28 md:h-28 rounded-lg w-20 h-20  bg-btnA border-[1px]  p-1  text-[#F0DC4E] border-[#F0DC4E] transition-colors hover:border-2 hover:animate-wiggle duration-150 cursor-pointer flex justify-center items-center">
            <SiJavascript className="md:text-5xl text-3xl"></SiJavascript>
          </div>
          <div className="box-border md:w-28 md:h-28 rounded-lg w-20 h-20  bg-btnA border-[1px]  p-1  text-[#214CE5] border-[#214CE5] transition-colors hover:border-2 hover:animate-wiggle duration-150 cursor-pointer flex justify-center items-center">
            <SiCss3 className="md:text-5xl text-3xl"></SiCss3>
          </div>

          <div className="box-border md:w-28 md:h-28 rounded-lg w-20 h-20  bg-btnA border-[1px]  p-1  text-[#E34F26] border-[#E34F26] transition-colors hover:border-2 hover:animate-wiggle duration-150 cursor-pointer flex justify-center items-center">
            <SiHtml5 className="md:text-5xl text-3xl"></SiHtml5>
          </div>

          <div className="box-border md:w-28 md:h-28 rounded-lg w-20 h-20  bg-btnA border-[1px]  p-1  text-[#fff] border-[#fff] transition-colors hover:border-2 hover:animate-wiggle duration-150 cursor-pointer flex justify-center items-center">
            <SiGithub className="md:text-5xl text-3xl"></SiGithub>
          </div>
          <div className="box-border md:w-28 md:h-28 rounded-lg w-20 h-20  bg-btnA border-[1px]  p-1  text-[#34A8F2] border-[#34A8F2] transition-colors hover:border-2 hover:animate-wiggle duration-150 cursor-pointer flex justify-center items-center">
            <SiVisualstudiocode className="md:text-5xl text-3xl"></SiVisualstudiocode>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
