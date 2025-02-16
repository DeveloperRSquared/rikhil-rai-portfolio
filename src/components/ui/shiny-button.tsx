'use client';

import { cn } from '@/lib/utils';
import { animationProps } from '@/utils/styleContants';
import { motion, MotionProps } from 'motion/react';
import React from 'react';

interface ShinyButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>, MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          'relative rounded-full px-6 py-[14px] font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/30%)]',
          className,
        )}
        {...animationProps}
        {...props}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
      >
        <span
          className="relative block size-full text-md tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
          style={{
            maskImage:
              'linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))',
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: 'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
            maskComposite: 'exclude',
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>
    );
  },
);

ShinyButton.displayName = 'ShinyButton';
