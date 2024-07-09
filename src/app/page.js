import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between p-24">
      <div className="App h-screen flex justify-center items-center">
        <label className="relative">
          <input type="text" className="h-20 w-96 px-6 text-4xl bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200" />
          <span className="text-4xl text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text">
              Email
          </span>
        </label>
      </div>
    </main>
  );
}
