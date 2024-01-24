import logo from "../assets/images/logo.svg";

function MainLogo() {
  return (
    <div className="h-[66px] w-[180px]">
      <img src={logo} alt="logo" className="h-full w-full object-fill" />
    </div>
  );
}

export default MainLogo;
