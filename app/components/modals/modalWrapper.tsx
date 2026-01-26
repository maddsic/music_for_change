// components/modal/ModalWrapper.tsx
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ModalWrapperProps } from '~/interface/modal';

export function ModalWrapper({ open, onClose, children }: ModalWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    // Lock background scroll
    document.body.style.overflow = 'hidden';

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onEscape);
    ref.current?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed inset-0 z-50 w-full mb-10 md:mb-0
            flex items-end md:items-center justify-center
            bg-black/60 backdrop-blur-sm 
            px-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={ref}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 80, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
            className="
              relative
              w-full
            md:max-w-4xl
              h-[90dvh] md:h-auto
              max-h-[90dvh]
              overflow-y-auto
              overscroll-contain
              rounded-t-3xl md:rounded-3xl
              bg-white
              p-6 md:p-8
              shadow-2xl border
            "
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
