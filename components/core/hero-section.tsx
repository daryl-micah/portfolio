export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hey👋, <br />
          <span className="underline underline-offset-8 decoration-green-500">
            I'm Daryl.
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-400">
          I'm a CSE grad and fullstack developer, based in Gurugram, India, with
          a passion for web development and all things technology.
        </p>
        <div>
          <a href="/DarylM_Resume" download="DarylM_Resume">
            <button className="text-2xl rounded-lg hover:text-indigo-500">
              Resume📥
            </button>
            <div className="w-28 h-[0.75px] bg-indigo-500 rounded-full translate-x-32"></div>
          </a>
        </div>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-45">
          <div className="flex gap-2 translate-x-6">
            <div className="w-32 h-32 rounded-2xl bg-green-500 hover:scale-105"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-2 translate-x-6">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
