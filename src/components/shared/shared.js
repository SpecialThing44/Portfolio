export const Title = ({ children }) => (
  <div className="text-4xl text-center font-bold mt-5">{children}</div>
);

export const Container = ({ children }) => (
  <div className="flex flex-col justify-center items-center relative z-1 clip-path-polygon">
    {children}
  </div>
);

export const Description = ({ children, textColor }) => (
  <div
    className={` ${textColor} overflow-hidden mt-2 max-w-full text-ellipsis`}
  >
    {children}
  </div>
);

export const Wrapper = ({ children }) => (
  <div className="relative flex flex-col justify-between items-center w-full max-w-6xl p-2.5 pb-25 gap-3 md:flex-col">
    {children}
  </div>
);

export const CardContainer = ({ children }) => (
  <div className="flex justify-center items-center gap-7 flex-wrap">
    {children}
  </div>
);

export const Card = ({ children, backgroundColor }) => (
  <div
    className={` bg-card rounded-lg shadow-lg overflow-hidden p-6 flex flex-col gap-3.5 border border-gray-500 ${backgroundColor}  `}
  >
    {children}
  </div>
);

export const CardTitle = ({ children, textColor }) => (
  <div
    className={`text-xl font-semibold ${textColor} overflow-hidden max-w-full `}
  >
    {children}
  </div>
);

export const CardDate = ({ children, textColor }) => (
  <div className={`text-sm ${textColor} `}>{children}</div>
);

export const Tags = ({ children }) => (
  <div className="w-full flex items-center flex-wrap gap-2 mt-1 justify-center">
    {children}
  </div>
);

export const TagsStart = ({ children }) => (
  <div className="w-full flex items-start flex-wrap gap-2 mt-1 justify-start">
    {children}
  </div>
);

export const Tag = ({ children, backgroundColor }) => (
  <div
    className={`${backgroundColor} rounded-lg px-2 py-1 border border-gray-500`}
  >
    <p className={`text-sm`}>{children}</p>
  </div>
);

export const ButtonLink = ({ children, href }) => (
  <a
    href={href}
    className=" px-5 py-2 text-sm font-bold rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 px-3 py-2 border border-gray-500"
  >
    {children}
  </a>
);
