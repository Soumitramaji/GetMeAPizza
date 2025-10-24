import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <section className="flex flex-col justify-center items-center text-white text-center py-24 bg-gradient-to-b from-[#0b0b2e] to-[#1a0033]">
        <h1 className="font-bold flex items-center gap-3 text-5xl md:text-6xl mb-4">
          Buy Me a Pizza
          <span>
            <img src="/pizza.gif" width={60} height={60} alt="pizza" />
          </span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mb-6">
          A crowdfunding platform for creators. Get funded by your fans and followers.
        </p>
        <Link href="/about">
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Read More
          </button>
        </Link>
      </section>

      <div className="bg-white h-[1px] opacity-10"></div>

      
<section className="text-white container mx-auto py-20 px-4">
  <h2 className="text-3xl font-bold text-center mb-16">
    How <span className="text-purple-400">GetMePizza!</span> Works
  </h2>

  <div className="flex flex-wrap justify-center gap-10">
    
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-8 rounded-2xl w-72 hover:bg-white/20 transition-all duration-300 shadow-lg text-center">
      <img
        className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 mb-5 shadow-md"
        src="/man.gif"
        alt="Set up your page"
      />
      <h3 className="font-bold text-lg mb-3">Set Up Your Page</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        Create your personal pizza page and share your story with your fans. Getting started takes just a minute.
      </p>
    </div>

    
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-8 rounded-2xl w-72 hover:bg-white/20 transition-all duration-300 shadow-lg text-center">
      <img
        className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-3 mb-5 shadow-md"
        src="/coin.gif"
        alt="Fans buy you a pizza"
      />
      <h3 className="font-bold text-lg mb-3">Fans Buy You a Pizza</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        Share your page and let your followers show love by buying you a pizza (or maybe a few 🍕).
      </p>
    </div>

    
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-8 rounded-2xl w-72 hover:bg-white/20 transition-all duration-300 shadow-lg text-center">
      <img
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full p-3 mb-5 shadow-md"
        src="/group.gif"
        alt="Enjoy the support"
      />
      <h3 className="font-bold text-lg mb-3">Enjoy the Support</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        Receive the love and encouragement from your amazing community while keeping your creativity alive.
      </p>
    </div>
  </div>
</section>



      <div className="bg-white h-[1px] opacity-10"></div>

      
      <section className="text-white container mx-auto py-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-10">Learn more about us</h2>
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/domCDwp5u3I?si=AY-EjL5OCWaCBwam"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}
