import {SiAboutdotme} from "react-icons/si"
const AboutSection = () => {
    return (
      <section className="box-border flex items-center justify-center w-full h-auto bg-bg lg:px-16">
        <div className="flex flex-col items-center justify-center w-full h-auto lg:p-8 md:p-4">
          <div className="box-border flex flex-col items-center justify-center w-full h-auto gap-3 rounded-md cursor-pointer">
            <h4 className="w-full h-auto text-4xl font-bold text-center text-text">
              About Me
            </h4>
            <div className="w-full h-auto box-border flex justify-center mt-8 ">
            
            <p className=" w-3/4 lg:h-96 h-auto md:text-2xl text-btnH bg-btnA rounded-md box-border lg:p-8 p-4 text-left border-2  border-primary hover:border-4 transition-all duration-150 text-lg relative group hover:text-white">
              {`Hey there! I'm Ayush Talesara, a front-end developer with 
              a passion for learning and taking on new challenges. 
              I have a solid foundation in HTML, CSS, and JavaScript, 
              and I've topped it off with three rounds of 100 days of code (that's almost a year of consistent coding!). 
              Currently, I am learning React JS to enhance 
              my front-end web development skills and stay up-to-date with the latest trends. 
              I'm in my third year of college, and I'm eager to continue honing my skills.
               Let's build some awesome websites together! `}
               {<div className="w-12 h-12 rounded-full bg-acc box-border p-1 flex justify-center items-center text-primary text-3xl absolute z-1 -left-6  -top-5 group-hover:border-2 border-primary"><SiAboutdotme></SiAboutdotme></div>}
            </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  