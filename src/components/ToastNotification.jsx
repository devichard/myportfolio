import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "../lib/utils";

export const ToastNotification = ({ status, onClose }) => {
  const { message, type } = status || {};

  const isSuccess = type === "success";
  const icon = isSuccess ? (
    <CheckCircle className="h-6 w-6" />
  ) : (
    <XCircle className="h-6 w-6" />
  );

  const bgColor = isSuccess
    ? "bg-green-600 shadow-green-700/50"
    : "bg-red-600 shadow-red-700/50";

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-xl shadow-2xl z-[9999] max-w-sm w-11/12",
            bgColor,
            "text-white flex items-center gap-3 cursor-pointer hover:scale-[1.02] transform-gpu"
          )}
          onClick={onClose}
        >
          {icon}
          <span className="font-semibold flex-grow text-sm">{message}</span>
          <button
            onClick={onClose}
            className="text-white opacity-90 hover:opacity-100 p-1 rounded-full transition-colors"
            aria-label="Fechar Notificação"
          >
            <XCircle size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
