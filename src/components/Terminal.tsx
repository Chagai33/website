import { motion } from 'framer-motion';

export const Terminal = () => {
  const lines = [
    { text: "> Initializing Chagai_System...", color: "text-blue-400", delay: 0 },
    { text: "> Loading modules: React, Node.js, Firebase...", color: "text-zinc-300", delay: 0.5 },
    { text: "> Connecting to Infrastructure... [OK]", color: "text-green-400", delay: 1.2 },
    { text: "> Verifying Security Protocols... [OK]", color: "text-green-400", delay: 1.8 },
    { text: "> Status: READY TO BUILD.", color: "text-blue-400 font-bold", delay: 2.5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      dir="ltr"
      className="w-full max-w-lg mx-auto bg-[#0d1117] border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono text-sm text-left"
    >
      {/* Window Header */}
      <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-auto text-xs text-white/20 font-sans">cy-dev-terminal</div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 space-y-2 min-h-[200px]">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay, duration: 0.3 }}
            className={`${line.color}`}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-blue-500 inline-block align-middle ml-1"
        />
      </div>
    </motion.div>
  );
};
