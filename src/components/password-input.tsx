"use client";
import { Input } from "@/components/ui/input";
import { forwardRef, useState } from "react";
import { FaEye, FaEyeLowVision } from "react-icons/fa6";

export default forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  function PasswordInput(props, ref) {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    return (
      <div className="relative">
        <Input {...props} type={showPassword ? "text" : "password"} ref={ref} />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          {!showPassword && <FaEye />}
          {showPassword && <FaEyeLowVision />}
        </button>
      </div>
    );
  }
);
