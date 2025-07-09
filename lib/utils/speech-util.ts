import { ActorSpeechModel } from "../components/organisms/actors/actor-speech/actor-speech";
import { ActorModel } from "../models/ActorModel";

/**
 * Creates a speech object for an actor
 */
export const createSpeech = (options: {
  messageId: string;
  actorModel: ActorModel;
  name: string;
  text: string;
  values?: Record<string, string | number>;
}): ActorSpeechModel => {
  const { messageId, actorModel, name, text, values = {} } = options;

  return {
    messageId,
    values: { ...values, ts: Date.now() },
    actorModel,
    name,
    text,
  };
};

/**
 * Creates multiple speech objects for a script
 */
export const createSpeechScript = (
  speeches: Array<{
    messageId: string;
    actorModel: ActorModel;
    name: string;
    text: string;
    values?: Record<string, string | number>;
  }>
): ActorSpeechModel[] => {
  return speeches.map((speech) => createSpeech(speech));
};

/**
 * Creates a conversation between multiple actors
 */
export const createConversation = (
  actors: ActorModel[],
  conversation: Array<{
    actorName: string;
    text: string;
    messageId?: string;
    values?: Record<string, string | number>;
  }>
): ActorSpeechModel[] => {
  return conversation.map((line, index) => {
    const actor = actors.find(
      (a) => a.name === line.actorName || a.variant === line.actorName
    );

    if (!actor) {
      throw new Error(`Actor not found: ${line.actorName}`);
    }

    return createSpeech({
      messageId: line.messageId || `conversation_${index}`,
      actorModel: actor,
      name: line.actorName,
      text: line.text,
      values: line.values,
    });
  });
};

/**
 * Creates a monologue for a single actor
 */
export const createMonologue = (
  actor: ActorModel,
  lines: string[],
  baseMessageId = "monologue"
): ActorSpeechModel[] => {
  return lines.map((line, index) =>
    createSpeech({
      messageId: `${baseMessageId}_${index}`,
      actorModel: actor,
      name: actor.name || actor.variant || "Unknown",
      text: line,
    })
  );
};

/**
 * Validates a speech script
 */
export const validateSpeechScript = (
  script: ActorSpeechModel[]
): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  script.forEach((speech, index) => {
    if (!speech.messageId) {
      errors.push(`Speech ${index}: Missing messageId`);
    }
    if (!speech.name) {
      errors.push(`Speech ${index}: Missing name`);
    }
    if (!speech.text && !speech.messageId) {
      errors.push(`Speech ${index}: Missing both text and messageId`);
    }
    if (!speech.actorModel) {
      errors.push(`Speech ${index}: Missing actorModel`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
};
