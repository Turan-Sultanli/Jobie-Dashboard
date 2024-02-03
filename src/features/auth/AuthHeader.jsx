import MainLogo from "../../shared/MainLogo"

function AuthHeader({children}) {
    return (
        <div className="mx-auto mb-6">
        <MainLogo />
        <h1 className=" mt-2 text-center text-lg font-medium text-white">
          {children}
        </h1>
      </div>
    )
}

export default AuthHeader
