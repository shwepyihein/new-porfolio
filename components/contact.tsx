const ContactUs = () => {
  return (
    <div
      id="contact"
      className=" px-4 py-12 min-h-screen flex items-center justify-center"
    >
      <div className="mx-auto h-96 w-full max-w-3xl cursor-text overflow-y-scroll rounded-lg bg-slate-950/70 font-mono shadow-xl backdrop-blur">
        <div className="sticky top-0 flex w-full items-center gap-1 bg-slate-900 p-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="absolute left-[50%] -translate-x-[50%] text-sm font-semibold text-slate-200">
            contact@shwepyihein.dev
          </span>
        </div>
        <div className="p-2 text-lg text-slate-100">
          <p>{`Hey there! I'm excited to link 🔗`}</p>
          <p className="overflow-hidden whitespace-nowrap font-light">
            ------------------------------------------------------------------------
          </p>
          <p>
            To start, could you give us{' '}
            <span className="text-violet-300">your email?</span>
          </p>
          <form>
            <input
              type="text"
              className="sr-only"
              autoComplete="off"
              defaultValue=""
            />
          </form>
          <p>
            <span className="text-emerald-400">➜</span>{' '}
            <span className="text-cyan-300">~</span>{' '}
            <span className="opacity-50">Enter email: </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
