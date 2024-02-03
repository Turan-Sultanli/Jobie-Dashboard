import { Link } from "react-router-dom"

function AuthFooter({children, label, path}) {
    return (
        <div className="mt-3">
          
        <span className="text-base text-white">{children}</span>
        <Link to={path} className="text-base text-white">
          {label}
        </Link>
      </div>

    )
}

export default AuthFooter
