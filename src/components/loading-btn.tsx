"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaCircleNotch } from "react-icons/fa6";
interface LoadingBtnProps extends ButtonProps {
  isLoading?: boolean;
}
export default function LoadingBtn({
  isLoading = false,
  className,
  children,
  ...props
}: LoadingBtnProps) {
  return (
    <Button className={cn("items-center gap-x-3", className)} {...props}>
      {isLoading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 0.9,
            ease: "linear",
          }}
        >
          <FaCircleNotch />
        </motion.div>
      )}
      {children}
    </Button>
  );
}
