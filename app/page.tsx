import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen p-24">
      <div className="flex items-center absolute top-0 left-0 p-6">
        <Image 
          src="/Logo-icon.png"
          alt="Sixtusdev Logo" 
          width={40}
          height={40}
          className="width-150 height-150 overflow-hidden rounded-full"
          priority  // This will make the image load faster
        />
        <span className="ml-1 text-xl font-medium tracking-wide text-gray-800">Sixtusdev</span>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-lg font-semibold">
          ✋ Hi there!
        </h2>
        <h1 className="text-5xl p-8 font-bold">
          Sixtus&apos;s Portfolio is Under <br /> Maintenance
        </h1>

        <p className="text-lg max-w-2xl leading-relaxed">
          Thank you for visiting my portfolio! I'm currently making some exciting updates to provide a better experience and showcase my latest work. Unfortunately, the site is temporarily unavailable, but it will be back online soon.
        </p>

        <p className="text-lg mt-6 max-w-2xl leading-relaxed">
          Please check back later, and I appreciate your patience as I work to improve the site. In the meantime, feel free to explore my main website for more information.
        </p>
       
        <a
          href="https://sixtusdev.net"
          className="tracking-wide text-lg  font-medium text-white bg-blue-600 px-6 py-3 mt-8 rounded-full hover:bg-blue-800"
        >
          Visit my website
        </a>
      </div>
    </main>
  );
}
