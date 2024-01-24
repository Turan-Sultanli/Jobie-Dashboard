function Logo({ src, w, h }) {
  return (
    <img
      src={src}
      alt="profile"
      width={w}
      height={h}
      className={`w-${w} h-${h} object-cover rounded-3xl`}
    />
  );
}

export default Logo;
