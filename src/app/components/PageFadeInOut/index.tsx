"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type PageFadeInOutProps = {
  children: ReactNode;
  backgroundColor?: string;
};

const PageFadeInOut: React.FC<PageFadeInOutProps> = ({ 
    children,
    backgroundColor = "#000" 
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
            backgroundColor,
            minHeight: "100vh",
            width: "100vw", // Ensures full width
            overflow: "hidden", // Prevents scrolling artifacts
          }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageFadeInOut;
