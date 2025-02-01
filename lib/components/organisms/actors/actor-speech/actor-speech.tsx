import { FC } from "react";
import { FormattedMessage, useIntlContext } from "react-intl";
import { Paragraph, Column } from "@cross-country/components";
import styles from "./actor-speech.module.css";

interface ActorSpeechProps {
  speech: {
    messageId: string;
    values?: Record<string, string | number>;
  };
}

export const ActorSpeech: FC<ActorSpeechProps> = ({ speech }) => {
  const { messageId, values } = speech;

  return (
    <Column customClass={styles.actorSpeech}>
      <Paragraph customClass={styles.actorParagraph}>
        <FormattedMessage id={messageId} values={values} />
      </Paragraph>
    </Column>
  );
};

export default ActorSpeech;
