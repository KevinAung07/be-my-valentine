"use client";
import { useState } from "react";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  // UPDATE THESE PHRASES to match what you want the button to say
  const phrases = [
    "No",
    "Are you sure?",
    "What if I asked really nicely?",
    "Pretty please",
    "Ill make you lots of Food :))",
    "What about a Matcha from GREGGS :))",
    "I WILL SHOOT MYSELF",
    "Yep im dead",
    ":((((",
    "RAHHHH :(",
  ];

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Page content configuration
  const pages = [
    {
      // Page 1: Why I'd be a good boyfriend
      title: "Why I Would Be a Good Boyfriend for You",
      subtitle: "Let me show you... 💕",
      image: "/images/page1.jpg",
      buttonText: "Ok......?",
    },
    {
      // Page 2: Hugs and kisses
      title: "I Will Give You Lots of Hugs and Kisses",
      subtitle: "Unlimited cuddles included! 🤗💋",
      image: "/images/page2.gif",
      buttonText: "Prove it! 🤨",
    },
    {
      // Page 3: Cooking
      title: "I Will Cook for You Every Day",
      subtitle: "Even though I burned the chicken last time, I'm still a great cook :DD 👨‍🍳🔥",
      image: "/images/page3.jpg",
      buttonText: "I'll be the judge of that 👨‍⚖️",
    },
    {
      // Page 4: Fight for you
      title: "I Will Fight All The Evil That Tries to Attack You!",
      subtitle: "I WILL FIGHT FOR YOU. RAHHH!! 💪😤⚔️",
      image: "/images/page4.jfif",
      buttonText: "My hero! 🦸‍♂️",
    },
    {
      // Page 5: Always there for you
      title: "I Will Always Be There for You",
      subtitle: "When you're at your lowest moments and need me, I'll be there. When you're at your highest point and need support, I'll be there too. Always. 🥺❤️",
      image: "/images/page5.jpg",
      buttonText: "That's so sweet... 🥹",
    },
  ];

  // Images for each "No" press on the final page (should match phrases array length)
  const noImages = [
    "/images/no0.jfif",   // "No"
    "/images/no1.gif",    // "Are you sure?"
    "/images/no2.gif",    // "What if I asked really nicely?"
    "/images/no3.gif",    // "Pretty please"
    "/images/no4.gif",    // "Ill make you lots of Food :))"
    "/images/no5.png",    // "What about a Matcha from GREGGS :))"
    "/images/no6.jfif",   // "I WILL SHOOT MYSELF"
    "/images/no7.gif",    // "Yep im dead"
    "/images/no9.jfif",   // ":(((("
    "/images/no10.jfif",   // "RAHHHH :("
  ];

  const getCurrentNoImage = () => {
    return noImages[Math.min(noCount, noImages.length - 1)];
  };

  // Final question page (Page 6)
  const renderFinalPage = () => {
    if (yesPressed) {
      return (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Kissing bears" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you babbyyy!! ;))</div>
        </>
      );
    }

    // Shrink image as Yes button grows to keep layout balanced
    const imageSize = Math.max(120, 200 - noCount * 5);

    return (
      <div className="flex flex-col items-center justify-center px-4">
        <img
          className="object-contain rounded-lg transition-all duration-300"
          style={{ height: `${imageSize}px` }}
          src={getCurrentNoImage()}
          alt="Please say yes!"
        />
        <h1 className="my-4 text-2xl md:text-4xl font-bold text-center">Will you be my Girl Friend & my Valentine?</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 transition-all"
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 whitespace-nowrap"
          >
            {getNoButtonText()}
          </button>
        </div>
      </div>
    );
  };

  // Render content pages (pages 1-5)
  const renderContentPage = (pageIndex: number) => {
    const page = pages[pageIndex];
    return (
      <>
        <img
          className="h-[200px] w-auto object-contain rounded-lg"
          src={page.image}
          alt={page.title}
        />
        <h1 className="my-4 text-3xl md:text-4xl font-bold text-gray-800">{page.title}</h1>
        <p className="mb-6 text-lg md:text-xl text-gray-600 max-w-md px-4">{page.subtitle}</p>
        <button
          onClick={nextPage}
          className="rounded-lg bg-pink-500 px-6 py-3 text-lg font-bold text-white hover:bg-pink-600 transition-all hover:scale-105"
        >
          {page.buttonText}
        </button>
      </>
    );
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white">
      {currentPage < pages.length ? (
        // Pages 1-5: Content pages
        renderContentPage(currentPage)
      ) : (
        // Page 6: Final question
        renderFinalPage()
      )}
      
      {/* Navigation and page indicator */}
      {!yesPressed && (
        <div className="fixed bottom-8 flex flex-col items-center gap-4">
          {/* Navigation buttons */}
          <div className="flex items-center gap-4">
            {/* Home button - go to start */}
            <button
              onClick={() => {
                setCurrentPage(0);
                setNoCount(0);
              }}
              disabled={currentPage === 0}
              className={`rounded-full p-2 transition-all ${
                currentPage === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
              title="Go to start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </button>

            {/* Back button */}
            <button
              onClick={() => {
                // If on final page and noCount > 0, go back through No images first
                if (currentPage === pages.length && noCount > 0) {
                  setNoCount(noCount - 1);
                } else if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              disabled={currentPage === 0 && noCount === 0}
              className={`rounded-full p-2 transition-all ${
                currentPage === 0 && noCount === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
              title="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Page dots */}
            <div className="flex gap-2">
              {[...Array(pages.length + 1)].map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentPage ? "bg-pink-500 w-4" : "bg-pink-200"
                  }`}
                />
              ))}
            </div>

            {/* Forward button */}
            <button
              onClick={() => {
                if (currentPage < pages.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              disabled={currentPage === pages.length}
              className={`rounded-full p-2 transition-all ${
                currentPage === pages.length
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
              title="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}