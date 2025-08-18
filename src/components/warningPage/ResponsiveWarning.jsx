import React, { useEffect, useState } from "react";

export default function ResponsiveWarning() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setShowWarning(window.innerWidth < 1000);
    }

    checkScreen(); // check on load
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-[#FF6000] text-white p-6 rounded-2xl shadow-lg text-center max-w-sm">
        <h2 className=" font-bold mb-4" style={{color:"#fff"}}>🚧 Under Construction 🚧</h2>
        <h3 className="mb-4 " style={{fontSize:"3vw"}}>
          Responsive version is not available yet. <br />
          👉 Please open this site on a PC.
        </h3>
      </div>
    </div>
  );
}
