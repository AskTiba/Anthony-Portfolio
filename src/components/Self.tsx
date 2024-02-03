import img from "../assets/img5.jpg";

const Self = () => {
  return (
    <>
      <main className="mb-20">
        <div className="flex gap-10 items-center justify-center">
          <img src={img} alt="" className="h-[400px] rounded-md object-cover" />
          <div className="">
            <p className="font-[900] text-[#32cd32] text-[20px]">ABOUT ME</p>
            <p className="font-[700] text-[18px] mt-2">
              {" "}
              A passionate front-end React Developer based in Kamapala, Uganda.
              📍
            </p>
            <p className="text-[17px] mt-3">
              Hi, I’m Anthony with a background in Computer Networking and a
              penchant for clean code, I specialize in crafting delightful user
              experiences. My toolkit includes HTML, CSS (with a flair for
              responsive design), JavaScript (ES6+), TypeScript, React, and
              React Native. I’m also a fan of the utility-first approach with
              Tailwind CSS. I’ve had the privilege of working on diverse
              projects. From e-commerce websites that adapt seamlessly across
              devices to interactive web apps that engage users, I thrive on
              turning ideas into reality. One of my proudest achievements was
              optimizing a landing page, resulting in a 30% increase in
              conversion rates.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Self;
