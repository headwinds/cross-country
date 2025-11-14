import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { Paragraph, Column } from "@headwinds/cross-country/components";
import styles from "./actor-speech.module.css";
import { ActorModel } from "@headwinds/cross-country/models";

export type ActorSpeechModel = {
  messageId: string;
  values?: Record<string, string | number>;
  actorModel: ActorModel;
  text: string;
};

export interface ActorSpeechProps {
  speech?: ActorSpeechModel;
  position?: { x: number; y: number };
  isVisible?: boolean;
}

export const ActorSpeech: FC<ActorSpeechProps> = ({
  speech,
  position = { x: 0, y: 0 },
  isVisible = true,
}) => {
  if (!speech || !isVisible) {
    return null;
  }

  const { messageId, values, text } = speech;

  return (
    <Column
      customClass={styles.actorSpeech}
      customStyle={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: 1000,
        maxWidth: 200,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        borderRadius: "8px",
        padding: "8px 12px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div style={{ fontSize: "10px", opacity: 0.8, marginBottom: "4px" }}>
        {speech?.actorModel?.name ?? ""}
      </div>
      <Paragraph customClass={styles.actorParagraph}>
        <span style={{ color: "white" }}>
          {text || <FormattedMessage id={messageId} values={values} />}
        </span>
      </Paragraph>
    </Column>
  );
};

export default ActorSpeech;
