import React from "react";
import { Button, Row } from "@headwinds/cross-country/components";
import styles from "./speech-controls.module.css";

export interface SpeechControlsProps {
  currentIndex: number;
  totalSpeeches: number;
  onNext: () => void;
  onPrev: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  isPlaying?: boolean;
  disabled?: boolean;
}

const SpeechControls: React.FC<SpeechControlsProps> = ({
  currentIndex,
  totalSpeeches,
  onNext,
  onPrev,
  onPlay,
  onPause,
  isPlaying = false,
  disabled = false,
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalSpeeches - 1;

  return (
    <Row customClass={styles.speechControls}>
      <Button
        onClick={onPrev}
        disabled={disabled || isFirst}
        customClass={styles.controlButton}
        customStyle={{
          opacity: disabled || isFirst ? 0.5 : 1,
          cursor: disabled || isFirst ? "not-allowed" : "pointer",
        }}
      >
        ⏮️ Prev
      </Button>

      {onPlay && onPause && (
        <Button
          onClick={isPlaying ? onPause : onPlay}
          disabled={disabled}
          customClass={styles.controlButton}
        >
          {isPlaying ? "⏸️ Pause" : "▶️ Play"}
        </Button>
      )}

      <Button
        onClick={onNext}
        disabled={disabled || isLast}
        customClass={styles.controlButton}
        customStyle={{
          opacity: disabled || isLast ? 0.5 : 1,
          cursor: disabled || isLast ? "not-allowed" : "pointer",
        }}
      >
        Next ⏭️
      </Button>

      <div className={styles.speechCounter}>
        {currentIndex + 1} / {totalSpeeches}
      </div>
    </Row>
  );
};

export default SpeechControls; 