import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-center mb-6">
          <Image src="/img/logo.svg" className="h-6" alt="Logo" width={50} height={50} />
          <p>Employee Portal</p>
          <div>
             <p className="text-[11px]">v1.03.1</p>
         </div>
        </div>

        <div className="divide-y divide-gray-300/50 w-full">
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <div className="flex flex-col space-y-6 justify-center items-center w-full max-w-lg mx-auto p-4">
              <div className="flex justify-center items-center w-full">
                <label className="relative w-full">
                  <input
                    type="text"
                    className="h-12 w-full px-4 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500 focus:text-black transition duration-200"
                  />
                  <span className="text-md text-black text-opacity-80 absolute left-4 top-1/2 transform -translate-y-1/2 transition duration-200 input-text">
                    EMAIL ADDRESS
                  </span>
                </label>
              </div>
              <div className="flex justify-center items-center w-full">
                <label className="relative w-full">
                  <input
                    type="password"
                    className="h-12 w-full px-4 text-xl bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-500 focus:text-black transition duration-200"
                  />
                  <span className="text-md text-black text-opacity-80 absolute left-4 top-1/2 transform -translate-y-1/2 transition duration-200 input-text">
                    PASSWORD
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
