const Footer = () => {
  return (
    <>
      <main className="flex justify-between text-[25px] mt-40">
        <div className="">
          <p>&copy; Tibamwenda Anthony — Your Code Connoisseur. 👋</p>
        </div>
        <div className="flex gap-4 cursor-pointer transition duration-300 ease-in-out">
          <p
            className="bg-left-bottom bg-gradient-to-r from-black to-black
          bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] 
          transition-all duration-500 ease-out"
          >
            LinkedIn
          </p>
          <p
            className="bg-left-bottom bg-gradient-to-r from-black to-black
          bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] 
          transition-all duration-500 ease-out"
          >
            Read.cv
          </p>
          <p
            className="bg-left-bottom bg-gradient-to-r from-black to-black
          bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] 
          transition-all duration-500 ease-out"
          >
            Discord
          </p>
          <p
            className="bg-left-bottom bg-gradient-to-r from-black to-black
          bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] 
          transition-all duration-500 ease-out"
          >
            Twitter/X
          </p>
          <p
            className="bg-left-bottom bg-gradient-to-r from-black to-black
          bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] 
          transition-all duration-500 ease-out"
          >
            Telegram
          </p>
        </div>
      </main>
    </>
  );
};

export default Footer;
