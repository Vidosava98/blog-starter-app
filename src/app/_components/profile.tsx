"use client";
import { motion } from "framer-motion";
type Props = {
  src: string;
  alt: string;
};
export default function Profile({ src, alt }: Props) {
  return (
    <motion.div
      className="relative w-60 h-60 mx-auto rounded-full overflow-hidden shadow-lg my-8"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}
