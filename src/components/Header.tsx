const Header = () => {
  return (
    <>
      <main className="flex justify-between text-[18px] gap-3 sticky">
        <div className="font-[700] cursor-pointer">
          <p className="py-[0.4em] px-[1em]">Tiba.dev</p>
        </div>
        <div className="">
          <button>
            <p>Home</p>
          </button>
          <button>
            <p>About</p>
          </button>
          <button>
            <p>Projects</p>
          </button>
          <button>
            <p>Contacts</p>
          </button>
        </div>
      </main>
    </>
  );
};

export default Header;
