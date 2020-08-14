import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFireStore("images");

  // console.log(docs)

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="image-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="New Uploaded Pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}
