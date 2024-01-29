import img from "../assets/img2.jpg";
const Hero = () => {
  return (
    <>
      <main className="mx-[100px]">
        <div className="flex-col text-[126px] font-[700] -tracking-[2.28px]">
          <p>Hey,</p>
          <p>I'm Anthony</p>
        </div>
        <div className="flex font-[600] text-[48px] justify-end mt-10 -tracking-[0.96px]">
          <p className="">
            — a hybrid designer and <br /> advisor nudging early-stage <br />{" "}
            brands and teams into <br /> greatness.
          </p>
        </div>
        <div className="my-40">
          <img className="rounded-[8px] w-full h-auto" src={img} />
        </div>
      </main>
    </>
  );
};

export default Hero;
