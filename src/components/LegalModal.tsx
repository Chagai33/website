import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const LegalModal = ({ isOpen, onClose, title, content }: LegalModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#09090b] border border-white/10 rounded-lg max-w-2xl w-full p-6 shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-sans text-white mb-6 pr-8">
              {title}
            </h3>

            <div className="text-zinc-300 font-light leading-relaxed whitespace-pre-line text-sm md:text-base">
              {content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
