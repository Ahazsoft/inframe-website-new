// 'use client';
// import React from "react";
// import { useTheme } from "next-themes";
// import dynamic from "next/dynamic";

// const  ThemeSetting = () => {
//   const { setTheme, theme } = useTheme();
//   const [settingOpen, setSettingOpen] = React.useState(false);

//   function handleOpenSetting() {
//     setSettingOpen(!settingOpen);
//   };
//   return (
//     <div
//       className={`tp-theme-settings-area transition-3 ${
//         settingOpen ? "settings-opened" : ""
//       }`}
//     >
//       <div className="tp-theme-wrapper">
//         <div className="tp-theme-header text-center">
//           <h4 className="tp-theme-header-title">Liko Mode Settings</h4>
//         </div>

//         <div className="tp-theme-dir mb-20">
//           <label className="tp-theme-dir-main" htmlFor="tp-dir-toggler">
//             <span
//               onClick={() => setTheme("dark")}
//               className={`tp-theme-dir-rtl ${theme === "dark" ? "active" : ""}`}
//             >
//               Dark
//             </span>
//             <input type="checkbox" id="tp-dir-toggler" checked={theme === "dark"} readOnly />
//             <i className="tp-theme-dir-slide"></i>
//             <span
//               onClick={() => setTheme("light")}
//               className={`tp-theme-dir-ltr ${
//                 theme === "light" ? "active" : ""
//               }`}
//             >
//               Light
//             </span>
//           </label>
//         </div>

//         <div className="tp-theme-settings">
//           <div className="tp-theme-settings-wrapper">
//             <div className="tp-theme-settings-open">
//               <button
//                 className="tp-theme-settings-open-btn"
//                 onClick={handleOpenSetting}
//               >
//                 <span className="tp-theme-settings-gear">
//                   <i className="fa-light fa-gear"></i>
//                 </span>
//                 <span className="tp-theme-settings-close">
//                   <i className="fa-regular fa-xmark"></i>
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(ThemeSetting), {
//   ssr: false
// })

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSetting() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const iconBg = isDark ? "#F5F5F7" : "#121212";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle Theme"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "6px",
      }}
    >
      {isDark ? (
        <Sun size={22} strokeWidth={1.8} color={iconBg} />
      ) : (
        <Moon size={22} strokeWidth={1.8} color={iconBg} />
      )}
    </button>
  );
}
