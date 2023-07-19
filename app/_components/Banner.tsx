function Banner() {
  return (
    <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl">History By AI Daily</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-[#F7AB0A] decoration-4">
            every person
          </span>
        </h2>
      </div>

      <p className="mt-5 max-w-sm text-gray-400 md:mt-2">
        New History Daily By Ai, Get a daily History of what happen each day
        from 1940 to our current time.
      </p>
    </div>
  );
}
export default Banner;
