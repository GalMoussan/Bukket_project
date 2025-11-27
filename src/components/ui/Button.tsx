import React from "react";
import clsx from "clsx";
import { motion, type MotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

// Combine normal button props + Framer Motion props + our own variants
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps & {
		variant?: ButtonVariant;
		size?: ButtonSize;
	};

const baseClasses =
	"inline-flex items-center justify-center rounded-bukket-pill font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bukket-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bukket-bg disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
	primary:
		"bg-bukket-primary text-bukket-bg hover:bg-bukket-primary-glow border border-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300",
	secondary:
		"border border-bukket-border-subtle text-bukket-text hover:border-bukket-primary hover:text-bukket-primary bg-bukket-soft/40",
	ghost: "text-bukket-text-soft hover:text-bukket-text",
};

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-3 py-1 text-xs",
	md: "px-5 py-2 text-sm",
	lg: "px-6 py-2.5 text-sm sm:text-base",
};

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "md",
	className,
	children,
	...rest
}) => {
	return (
		<motion.button
			whileHover={{ y: -1 }}
			whileTap={{ scale: 0.97 }}
			className={clsx(
				baseClasses,
				variantClasses[variant],
				sizeClasses[size],
				className
			)}
			{...rest}
		>
			{children}
		</motion.button>
	);
};