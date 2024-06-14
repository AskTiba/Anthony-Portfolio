const Header = () => {
  return (
    <>
      <main className="sticky top-0 bg-transparent backdrop-blur-[5px]">
        <div className="flex justify-between items-center text-[18px] shadow-sm">
          <div className="font-[700] cursor-pointer">
            <p className="py-[0.5rem] px-[1em]">Tiba.dev</p>
          </div>
          <div className="flex pb-[0.5rem]">
            <ul className="flex">
              <li>
                <a className="button" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="button" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="button" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="button p-0" href="#">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
