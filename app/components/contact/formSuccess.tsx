import { motion } from 'framer-motion';

export default function FormSuccess({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center"
    >
      <h3 className="text-2xl font-bold mb-4">Thanks for reaching out 🎶</h3>
      <p className="text-slate-600 mb-6">We&apos;sll be in touch very soon.</p>
      <button
        onClick={onClose}
        className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold"
      >
        Close
      </button>
    </motion.div>
  );
}
