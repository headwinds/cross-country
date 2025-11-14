import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import clsx from "clsx";

export interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  scrambleDuration?: number;
  autoPlay?: boolean;
  customClass?: string;
  customStyle?: React.CSSProperties;
}

// Characters used for scrambling effect
const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className,
  duration = 2000,
  scrambleDuration = 100,
  autoPlay = true,
  customClass,
  customStyle,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const unscrambledPositions = useRef(new Set<number>());
  const positionsToUnscramble = useRef<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Animation for the component appearance
  const springProps = useSpring({
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
    config: config.gentle,
  });

  // Generate random character
  const getRandomChar = () => {
    return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  };

  // Create an array of indices for all non-space characters
  const createPositionsArray = useCallback(() => {
    const positions: number[] = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        positions.push(i);
      }
    }
    return positions;
  }, [text]);

  // Fisher-Yates shuffle algorithm to randomize positions
  const shuffleArray = (array: number[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Update the displayed text with scrambled characters
  const updateScrambledText = useCallback(() => {
    const chars = text.split("");
    for (let i = 0; i < chars.length; i++) {
      // Only scramble non-space characters that haven't been unscrambled yet
      if (chars[i] !== " " && !unscrambledPositions.current.has(i)) {
        chars[i] = getRandomChar();
      }
    }
    setDisplayText(chars.join(""));
  }, [text]);

  // Start the animation sequence
  const startAnimation = useCallback(() => {
    setIsAnimating(true);

    // Clear any existing timeouts and intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    // Reset unscrambled positions
    unscrambledPositions.current = new Set();

    // Create and shuffle positions to unscramble
    positionsToUnscramble.current = shuffleArray(createPositionsArray());

    // Start the scrambling interval
    intervalRef.current = setInterval(updateScrambledText, scrambleDuration);

    // Schedule when each character will be unscrambled
    const positions = positionsToUnscramble.current;
    const timePerChar = duration / positions.length;

    positions.forEach((position, index) => {
      const timeout = setTimeout(() => {
        unscrambledPositions.current.add(position);

        // If this is the last character, clean up
        if (index === positions.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsAnimating(false);
        }
      }, timePerChar * (index + 1));

      timeoutsRef.current.push(timeout);
    });
  }, [
    text,
    duration,
    scrambleDuration,
    updateScrambledText,
    createPositionsArray,
  ]);

  // Clean up function to clear all intervals and timeouts
  const cleanup = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  // Initialize animation on mount or when text changes
  useEffect(() => {
    if (autoPlay) {
      startAnimation();
    } else {
      setDisplayText(text);
    }

    return cleanup;
  }, [text, autoPlay, startAnimation, cleanup]);

  // Clean up on component unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return (
    <animated.span style={springProps} className={clsx("relative", className)}>
      <span className={customClass} style={customStyle}>
        {displayText || text}
      </span>
    </animated.span>
  );
};

export default ScrambleText;
