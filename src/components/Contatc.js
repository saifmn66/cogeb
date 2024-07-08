import React from "react";

export default function Contact() {
  return (
    <div>
      <h1 className="text-[#3A5A40] pt-10 text-3xl font-bold sm:ml-[13%] mb-8">
        CONTACT NOUS{" "}
      </h1>
      <div className="flex sm:max-w-[80%]  mx-auto justify-around flex-wrap">
        <div class="px-6 py-3.5 text-base sm:w-auto w-[70%] m-6 font-medium text-white inline-flex items-center bg-[#2D7A71]  focus:ring-4 focus:outline-none  rounded-3xl text-center ">
          <svg
            className="w-8 h-8 text-white me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <defs>
              <linearGradient id="customGradient" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B88824" />
                <stop offset="39%" stopColor="#E1C550" />
                <stop offset="74%" stopColor="#CEA93B" />
                <stop offset="100%" stopColor="#B07A12" />
              </linearGradient>
            </defs>
            <path
              fill="url(#customGradient)"
              d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
            />
            <path
              fill="url(#customGradient)"
              d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
            />
          </svg>

          <div>
            <h3 className="text-white">MAIL</h3>
            <p className="text-black text-xs">cogebimmobiliere@gmail.com</p>
          </div>
        </div>
        <div class="px-6 py-3.5 sm:w-auto w-[70%] text-base m-6 font-medium text-white inline-flex items-center bg-[#2D7A71]  focus:ring-4 focus:outline-none  rounded-3xl text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="size-8"
          >
            <defs>
              <linearGradient id="customGradient" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B88824" />
                <stop offset="39%" stopColor="#E1C550" />
                <stop offset="74%" stopColor="#CEA93B" />
                <stop offset="100%" stopColor="#B07A12" />
              </linearGradient>
            </defs>
            <path
              fill="url(#customGradient)"
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>

          <div>
            <h3 className="text-white">TELEPHONE</h3>
            <p className="text-black">+216 73 323 435</p>
          </div>
        </div>
        <div class="px-6 py-3.5 sm:w-auto w-[70%] text-base m-6 font-medium text-white inline-flex items-center bg-[#2D7A71]  focus:ring-4 focus:outline-none  rounded-3xl text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-8"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#B88824" }} />
                <stop offset="39%" style={{ stopColor: "#E1C550" }} />
                <stop offset="74%" style={{ stopColor: "#CEA93B" }} />
                <stop offset="100%" style={{ stopColor: "#B07A12" }} />
              </linearGradient>
            </defs>
            <path
              d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"
              fill="url(#gradient)"
            />
          </svg>

          <div>
            <h3 className="text-white">SITEWEB</h3>
            <p className="text-black">cogeb/immobiliere.com</p>
          </div>
        </div>
        <div class="px-6 py-3.5 sm:w-auto w-[70%] text-base m-6 font-medium text-white inline-flex items-center bg-[#2D7A71]  focus:ring-4 focus:outline-none  rounded-3xl text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#B88824" }} />
                <stop offset="39%" style={{ stopColor: "#E1C550" }} />
                <stop offset="74%" style={{ stopColor: "#CEA93B" }} />
                <stop offset="100%" style={{ stopColor: "#B07A12" }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            />
          </svg>

          <div>
            <h3 className="text-white uppercase">localisation</h3>
            <p className="text-black"> Avenue de l'environnement, <br/> Sousse, Tunisia, 4000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
