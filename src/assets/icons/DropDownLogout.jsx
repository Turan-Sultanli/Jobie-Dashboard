function DropDownLogout() {
  return (
    <svg
      id="icon-logout"
      xmlns="http://www.w3.org/2000/svg"
      className="text-danger"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9e2f1c"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1={21} y1={12} x2={9} y2={12} />
    </svg>
  );
}

export default DropDownLogout;