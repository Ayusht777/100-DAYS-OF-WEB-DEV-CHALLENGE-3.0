import { data } from "./data.jsx";
import { DiReact, DiJsBadge, DiSass, DiTerminal } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { saveAs } from "file-saver";
const HeroSection = () => {
  console.log(data[0].ImagesData[0].img);
  const ProfileImg = data[0].ImagesData[0].img;
  const DownloadBtn = () => {
    const fileUrl = "https://drive.google.com/file/d/1Mji57oAqK7hK9RSCcTgmo05Z3Gw7HE7i/view?usp=drive_link";
    const fileName = "Ayush Talesara CV.pdf";
    saveAs(fileUrl, fileName);
  };
  return (
    <section className="box-border flex flex-col-reverse items-center justify-center w-full h-auto px-10 py-8 bg-bg lg:px-16 md:flex-row">
      {/* BioDiv */}
      <div className="box-border flex items-center justify-start w-full h-auto my-8 cursor-pointer md:my-0 lg:my-0 lg:p-8 md:p-4 md:h-auto ">
        <div className="w-full lg:h-[26rem] md:[24rem] box-border flex justify-center items-center lg:pl-16 md:pl-4 flex-col md:gap-6 gap-7">
          <h1 className="w-auto h-auto text-4xl lg:text-6xl md:text-5xl text-text">
            Ayush Talesara
          </h1>
          <h4 className="w-auto h-auto text-lg lg:text-2xl md:text-xl text-text">
            Front-End Developer
          </h4>
          {/* social media icons */}
          <div className="flex flex-row items-center justify-start w-auto h-auto gap-4 md:mt-8 ">
            <FaGithub className="text-2xl text-btnH hover:text-btnA "></FaGithub>
            <FaLinkedin className="text-2xl text-btnH hover:text-btnA"></FaLinkedin>
          </div>
          <div className="flex flex-col items-center justify-start w-auto h-auto gap-6 md:gap-4 md:mt-4 md:flex-row">
            <button
              className="flex items-center justify-center w-56 h-12 gap-2 rounded-md lg:w-48 lg:h-12 md:w-40 md:h-12 bg-primary text-text hover:bg-btnH"
              onClick={DownloadBtn}
            >
              Download CV <HiDownload></HiDownload>
            </button>
            <button className="flex items-center justify-center w-56 h-12 gap-2 rounded-md lg:w-48 lg:h-12 md:w-40 md:h-12 bg-btn text-text hover:bg-btnH">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {/* imgDiv */}
      <div className="box-border flex items-center justify-center w-full h-auto my-8 lg:p-8 md:p-4 md:h-auto md:my-0 lg:my-0">
        {/* img&Icons */}
        <div className="lg:w-[25rem] lg:h-[25rem] md:w-[22rem] md:h-[22rem]  w-[20rem] h-[20rem] box-border flex justify-center items-center ">
          <div className="lg:w-[25rem]  lg:h-[25rem] md:w-[22rem] md:h-[22rem]  w-[20rem] h-[20rem] rounded-full ring-4 ring-btnH flex justify-center items-center relative bg-transparent box-border">
            <DiReact className="box-border absolute -top-1 left-16 z-10 text-[2.5rem] font-bold rounded-full lg:top-0 lg:text-6xl md:text-5xl text-primary lg:left-15 md:left-[50px] bg-acc"></DiReact>
            <DiJsBadge className="absolute z-10 lg:text-3xl text-2xl text-primary md:right-[15px] md:bottom-[70px]  right-[10px] bottom-[70px] bg-acc rounded-md box-border"></DiJsBadge>

            <div className="lg:w-[20.5rem] lg:h-[20.5rem]  md:w-[18.5rem] md:h-[18.5rem] w-[16.5rem] h-[16.5rem] ring-2 ring-btnH rounded-full flex justify-center items-center relative box-border">
              <DiSass className="absolute z-10 lg:text-4xl  text-3xl  text-acc font-bold lg:-right-2  lg:top-[90px] md:-right-2  md:top-[90px] -right-3 top-[100px] bg-primary rounded-md box-border"></DiSass>
              <DiTerminal className="absolute z-10 lg:text-4xl  text-3xl text-primary font-bold lg:right-[245px] lg:-bottom-[-10px] md:right-[220px] md:-bottom-[-12px] right-[195px] -bottom-[-8px] bg-acc rounded-md box-border"></DiTerminal>
              <img
                src={ProfileImg}
                alt="Ayush Image"
                className="box-border border-4 border-solid rounded-full w-52 h-52 lg:w-64 lg:h-64 md:w-60 md:h-60 border-acc"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
