const GithubLinks = ({ href }: { href: string }) => {
  return (
    <a
      target="_blank"
      rel="nofollow"
      className=" truncate gap-3 w-full text-nowrap overflow-hidden flex items-center"
      href={href}
    >
      <svg
        stroke="#fff"
        fill="#fff"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="2rem"
        width="2rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
      </svg>
      <span className="text-cyan-400 text-lg overflow-hidden">
        {href.replace('https://github.com/shwepyihein', '')}
      </span>
    </a>
  );
};

const WebLinks = ({ href }: any) => {
  return (
    <a
      target="_blank"
      rel="nofollow"
      className="flex gap-3 items-center"
      href={href}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M424 64H88c-26.6 0-48 21.6-48 48v288c0 26.4 21.4 48 48 48h336c26.4 0 48-21.6 48-48V112c0-26.4-21.4-48-48-48zm0 336H88V176h336v224z"></path>
      </svg>
      <span className="text-cyan-400 text-lg  truncate overflow-hidden">
        {href}
      </span>
    </a>
  );
};

export { GithubLinks, WebLinks };
