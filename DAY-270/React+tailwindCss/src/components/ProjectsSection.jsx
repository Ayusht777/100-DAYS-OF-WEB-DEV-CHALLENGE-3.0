import { DiReact, DiCss3, DiHtml5, DiGithubBadge } from "react-icons/di";
import { TiWeatherSunny } from "react-icons/ti";
import { SiVite } from "react-icons/si";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { data } from "./data.jsx";
const ProjectsSection = () => {
  const weatherAppImage = data[0].ImagesData[1].img;
  const githubUserSearchImage = data[0].ImagesData[2].img;
  return (
    <section className="box-border flex items-center justify-center w-full h-auto bg-bg lg:px-16 ">
      <div className="flex flex-col items-center justify-center w-full h-auto lg:p-8 md:p-4">
        <div className="box-border flex flex-col items-center justify-center w-full h-auto gap-3 rounded-md cursor-pointer">
          <h4 className="w-full h-auto text-4xl font-bold text-center text-text">
            My Projects
          </h4>
          <p className="w-full h-auto text-center md:text-xl text-text">
            This is the list of all my recent work
          </p>
        </div>
        {/* projectsinfo */}
        <div className="box-border flex flex-col items-center w-full h-full gap-8 px-4 mt-16 mb-16 it xl:px-16">
          <div className="box-border flex flex-col w-full gap-2 p-2 transition-all duration-150 cursor-pointer md:p-4 md:w-4/5 lg:w-full lg:h-full border-btn bg-btnA rounded-xl hover:border-primary md:hover:border-4 hover:border-2 xl:h-full lg:flex-row">
            <div className="box-border lg:w-2/4  rounded-[.25rem] bg-btn lg:h-auto h-64">
              <img
                className="w-full h-full rounded-[.25rem] box-border"
                src={weatherAppImage}
                alt="weatherAppImage"
              />
            </div>
            <div className="lg:w-2/4  lg:h-full md:h-auto rounded-[.25rem] box-border bg-bg p-2 md:p-4 h-full">
              <div className="box-border w-full h-auto px-2 py-1 border-b-[1px] border-b-btn">
                <h1 className="flex items-center justify-center text-2xl font-semibold capitalize md:mb-2 lg:text-4xl md:text-3xl text-btnH">
                  Weather App
                </h1>
              </div>
              <div className="box-border w-full h-auto px-2 py-4 md:px-4 ">
                <p className="w-full h-auto text-center text-md text-text md:text-lg md:text-start">
                  This is a React JS weather app. which gives you up-to-date
                  weather information, air quality, and a 7-day forecast. The
                  user experience is enhanced by dynamic animated icons and a
                  responsive UI design, which includes hourly and daily
                  projections, on all devices.
                </p>
              </div>
              <div className="box-border flex flex-wrap justify-center w-full h-auto gap-2 px-2 py-1 md:px-4 md:py-2 md:justify-normal">
                <div className="box-border flex items-center w-24 px-1 py-1 rounded-md md:px-2 h-9 justify-evenly md:w-28 bg-btnA">
                  <DiReact className="text-2xl text-[#43C3EC] "></DiReact>
                  <p className="m-auto text-text">React JS</p>
                </div>
                <div className="box-border flex items-center px-2 py-1 rounded-md md:w-auto h-9 justify-evenly bg-btnA ">
                  <TiWeatherSunny className="text-2xl text-[#E96E4D] mr-2"></TiWeatherSunny>
                  <p className="m-auto text-text">OpenWeather API</p>
                </div>
                <div className="box-border flex items-center w-auto px-2 py-1 rounded-md h-9 justify-evenly bg-btnA">
                  <SiVite className="text-2xl text-[#FEC81E] mx-1"></SiVite>
                  <p className="mx-2 text-text">Vite</p>
                </div>
                <div className="box-border flex items-center w-auto px-2 py-1 rounded-md h-9 justify-evenly bg-btnA">
                  <DiCss3 className="text-2xl text-[#2465F1]"></DiCss3>
                  <p className="mx-3 text-text">CSS</p>
                </div>
                <div className="box-border flex items-center w-auto px-2 py-1 rounded-md h-9 justify-evenly bg-btnA">
                  <DiHtml5 className="text-2xl text-[#F16529] mx-1"></DiHtml5>
                  <p className="mx-1 text-text">HTML</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-auto gap-4 px-2 py-2 md:px-4 lg:flex-row">
                <button className="w-full rounded-md h-9 lg:w-1/2 xl:h-12 bg-primary">
                  <a
                    href="https://ayusht777.github.io/Weather-App-React-JS/"
                    className="flex items-center w-full h-full px-2 py-1 justify-evenly"
                  >
                    <HiOutlineStatusOnline className="text-2xl xl:text-3xl text-acc"></HiOutlineStatusOnline>{" "}
                    <p className="m-0 text-xl font-semibold text-center xl:text-2xl text-acc">
                      Live Demo
                    </p>
                  </a>
                </button>

                <button className="w-full rounded-md h-9 lg:w-1/2 xl:h-12 bg-btnA">
                  <a
                    href="https://github.com/Ayusht777/Weather-App-React-JS"
                    className="flex items-center w-full h-full px-2 py-1 justify-evenly"
                  >
                    <DiGithubBadge className="text-2xl xl:text-3xl text-primary"></DiGithubBadge>{" "}
                    <p className="text-lg xl:text-2xl text-primary ">
                      Github Repo
                    </p>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* second div */}
          <div className="box-border flex flex-col w-full gap-2 p-2 transition-all duration-150 cursor-pointer md:p-4 md:w-4/5 lg:w-full lg:h-full border-btn bg-btnA rounded-xl hover:border-primary md:hover:border-4 hover:border-2 xl:h-full lg:flex-row">
            <div className="box-border lg:w-2/4  rounded-[.25rem] bg-btn lg:h-auto h-64">
              <img
                className="w-full h-full rounded-[.25rem] box-border"
                src={githubUserSearchImage}
                alt="weatherAppImage"
              />
            </div>
            <div className="lg:w-2/4  lg:h-full h-auto rounded-[.25rem] box-border bg-bg p-2 md:p-4">
              <div className="box-border w-full h-auto px-2 py-1 border-b-[1px] border-b-btn">
                <h1 className="flex items-center justify-center text-2xl font-semibold capitalize md:mb-2 lg:text-4xl md:text-3xl text-btnH">
                  Github User SearchX
                </h1>
              </div>
              <div className="box-border w-full h-auto px-2 py-4 md:px-4 ">
                <p className="w-full h-auto text-center text-md text-text md:text-lg md:text-start">
                  This GitHub search application allows you to find any valid
                  GitHub user profile With its Name & will provides information
                  such as the total number of repositories, followers, etc. The
                  app is designed with a responsive layout so that it can adapt
                  to different screen sizes.
                </p>
              </div>
              <div className="box-border flex flex-wrap justify-center w-full h-auto gap-2 px-2 py-1 md:px-4 md:py-2 md:justify-normal">
                <div className="box-border flex items-center w-24 px-1 py-1 rounded-md md:px-2 h-9 justify-evenly md:w-28 bg-btnA">
                  <DiReact className="text-2xl text-[#43C3EC] "></DiReact>
                  <p className="m-auto text-text">React JS</p>
                </div>
                <div className="box-border flex items-center px-2 py-1 rounded-md md:w-auto h-9 justify-evenly bg-btnA ">
                  <DiGithubBadge className="text-2xl text-[#CBDAE6] mr-2"></DiGithubBadge>
                  <p className="m-auto text-text">Github API</p>
                </div>
                <div className="box-border flex items-center w-auto px-2 py-1 rounded-md h-9 justify-evenly bg-btnA">
                  <SiVite className="text-2xl text-[#FEC81E] mx-1"></SiVite>
                  <p className="mx-2 text-text">Vite</p>
                </div>
                <div className="box-border flex items-center w-auto px-2 py-1 rounded-md h-9 justify-evenly bg-btnA">
                  <DiCss3 className="text-2xl text-[#2465F1]"></DiCss3>
                  <p className="mx-3 text-text">CSS</p>
                </div>
                <div className="box-border flex items-center w-auto px-2 py-1 rounded-md h-9 justify-evenly bg-btnA">
                  <DiHtml5 className="text-2xl text-[#F16529] mx-1"></DiHtml5>
                  <p className="mx-1 text-text">HTML</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-auto gap-4 px-2 py-2 md:px-4 lg:flex-row">
                <button className="w-full rounded-md h-9 lg:w-1/2 xl:h-12 bg-primary">
                  <a
                    href="https://ayusht777.github.io/Weather-App-React-JS/"
                    className="flex items-center w-full h-full px-2 py-1 justify-evenly"
                  >
                    <HiOutlineStatusOnline className="text-2xl xl:text-3xl text-acc"></HiOutlineStatusOnline>{" "}
                    <p className="m-0 text-xl font-semibold text-center xl:text-2xl text-acc">
                      Live Demo
                    </p>
                  </a>
                </button>

                <button className="w-full rounded-md h-9 lg:w-1/2 xl:h-12 bg-btnA">
                  <a
                    href="https://github.com/Ayusht777/Weather-App-React-JS"
                    className="flex items-center w-full h-full px-2 py-1 justify-evenly"
                  >
                    <DiGithubBadge className="text-2xl xl:text-3xl text-primary"></DiGithubBadge>{" "}
                    <p className="text-lg xl:text-2xl text-primary ">
                      Github Repo
                    </p>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
