import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero">
          <div className="container py-12">
            <h1 className="text-5xl leading-snug font-bold text-white w-[750px]">
              Building Bridges, Sharing Plates: Nourishing Our Community
              Together
            </h1>
            <div className="btns mt-2">
              <button className="m-3 btn rounded-sm bg-slate-300">
                Share Food
              </button>
              <button className="m-3 btn rounded-sm bg-slate-300">
                Request Food
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
