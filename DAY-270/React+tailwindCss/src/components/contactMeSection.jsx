const ContactMeSection = () => {
  return (
    <section className="box-border flex items-center justify-center w-full h-auto bg-bg lg:px-16 " id="contact">
        <div className="flex flex-col items-center justify-center w-full h-auto lg:p-8 md:p-4">
        <div className="box-border flex flex-col items-center justify-center w-full h-auto gap-3 rounded-md cursor-pointer">
          <h4 className="w-full h-auto text-4xl font-bold text-center text-text">
            Contact Me
          </h4>
          <p className="w-full h-auto text-center md:text-xl text-text">
            Lets Build Together
          </p>
        </div>
         <div className=" md:w-2/4 w-4/5 h-auto box-border grid md:grid-cols-2 lg:gap-8 gap-4 mt-16 grid-cols-1 ">
            <div className="w-full h-auto box-border">
               <div className="w-full h-auto box-border"><p className="w-full h-auto text-btnH text-xl mb-2">Full Name*</p><input className="w-full h-10 box-border px-2 bg-btnA border-primary  border-2 rounded-md text-text " type="text" placeholder="Ravi Sharma"/></div>
            </div>
            <div className="w-full h-auto box-border">
               <div className="w-full h-auto box-border"><p className="w-full h-auto text-btnH text-xl mb-2">Email*</p><input className="w-full h-10 box-border px-2 bg-btnA border-primary  border-2 rounded-md text-text " type="email" placeholder="Ravisharma@email.com"/></div>
            </div>
            
         </div>
         <div className=" md:w-2/4 w-4/5  h-auto box-border mt-4">
         <div className="w-full h-auto box-border">
               <div className="w-full h-auto box-border"><p className="w-full h-auto text-btnH text-xl mb-2">Subject*</p><input className="w-full h-10 box-border px-2 bg-btnA border-primary  border-2 rounded-md text-text " type="text" placeholder="subject"/></div>
            </div>
         </div>
         <div className="md:w-2/4 w-4/5  h-auto box-border mt-4">
         <div className="w-full h-auto box-border"><p className="w-full h-auto text-btnH text-xl mb-2">Message</p><textarea className="w-full h-60 box-border p-2 bg-btnA border-primary  border-2 rounded-md text-text resize-none" name="" id="" rows="6" placeholder="message"   ></textarea></div>
            
         </div>
         <div  className="md:w-2/4 w-4/5  h-auto box-border mt-8">
            <button className="w-full h-10 bg-btn rounded-md flex justify-center items-center text-text mb-8 hover:bg-primary"><p>Lets Chat</p></button>
         </div>
        </div>
    </section>
  )
}

export default ContactMeSection