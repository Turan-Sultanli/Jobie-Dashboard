import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { useLayoutEffect } from "react";

function AuthLayout() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate()

  const {pathname} = useLocation()

  const notRecoverPasswordPath = !pathname.endsWith("update-password") && !pathname.endsWith("forgot-password")

  useLayoutEffect(() => {
    if(isAuthenticated && notRecoverPasswordPath)  navigate("/app", {replace: true})
  }, [isAuthenticated, navigate, notRecoverPasswordPath])

  return (
    <div className=" h-screen bg-body dark:bg-body">
      <div className="absolute left-0 right-0 top-1/2 mx-auto w-full max-w-[540px] -translate-y-1/2">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
