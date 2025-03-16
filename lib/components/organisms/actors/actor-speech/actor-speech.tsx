import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { Paragraph, Column } from "@headwinds/cross-country/components";
import styles from "./actor-speech.module.css";
import { Actor } from "xstate";
import { ActorModel } from "@headwinds/cross-country/models";

export type ActorSpeechModel = {
  messageId: string;
  values?: Record<string, string | number>;
  actorModel: ActorModel;
  name: string;
  text: string;
};

export interface ActorSpeechProps {
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
