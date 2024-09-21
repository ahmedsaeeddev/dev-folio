const Contact = () => {
    return (
        <>
            <div className="main flex justify-center p-4 m-auto md:flex-row lg:flex-row flex-col-reverse items-center">
                <div className="">

                    <div className="form m-auto text-center flex flex-col justify-center">
                        <form className="flex flex-col w-[88%] m-auto justify-center">
                            <input type="text" placeholder="Your Name" className="border-2 w-64 py13 rounded-xl border-black p-1 my-2 m-auto md:yp-2 lg:yp-2 xl:yp-2" />
                            <input type="email" placeholder="Email" className="border-2 w-64 py-1 rounded-xl border-black p-1 my-2 m-auto md:py-2 lg:py-2 xl:py-2" />
                            <input type="text" className="border-2 w-64 py-1 rounded-xl border-black p-1 my-2 m-auto md:py-2 lg:py-2 xl:py-2" placeholder="Your website (If exists)" />
                            <textarea className="border-2 w-64 border-black my-2 m-auto rounded-xl h-24 p-2" placeholder="How can I help?*"></textarea>
                        </form>
                        <div className="m-3 bg-white">
                            <a href="" className="bg-black p-2 text-white hover:text-black hover:bg-white border-2 border-black rounded-lg">Get in Touch</a>
                            <i className="fa-brands border-2 border-black m-2 p-2 hover:bg-black hover:text-white rounded fa-instagram"></i>
                            <i className="fa-brands border-2 border-black m-2 p-2 hover:bg-black hover:text-white rounded fa-github"></i>
                            <i className="fa-brands border-2 border-black m-2 p-2 hover:bg-black hover:text-white rounded fa-linkedin"></i>
                            <i className="fa-brands border-2 border-black m-2 p-2 hover:bg-black hover:text-white rounded fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
                <div className="txtSect md:w-[30%] lg:w-[30%] xl:w-[30%] text-center md:text-left lg:text-left xl:text-left  w-[60%] leading-7 sm:leading-0">
                    <h1 className="font-normal text-3xl  my-2 text-[#0f1113]">
                        Let&apos; s <span className="font-bold">talk</span> for Something Special
                    </h1>
                    <p className="text-gray-800 ">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <p className="text-gray-900 font-medium">
                        <a href="mailto:ahmedsaeeddev0@gmail.com" className="text-[14px] md:text-xl lg:text-xl xl:text-xl">ahmedsaeeddev0@gmail.com</a><br />
                        <a href="tel:+923112348744">03112348744</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact