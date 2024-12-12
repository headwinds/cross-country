import {
  Column,
  Row,
  Form,
  TextInput,
  Button,
  Label,
  Paragraph,
  HorizontalLine,
} from "@cross-country/components";
import type { SocialUser } from "./registration";

interface SocialEmailProps {
  socialUser: SocialUser;
  message?: string;
}

const defaultEnglishMessage =
  "We only require a username to identify you in our system so that others can recognize you too.";

const SocialEmail = ({ socialUser, message = defaultEnglishMessage }) => {
  if (socialUser) {
    const email = `${socialUser.platform} email: ${socialUser.email}`;

    return (
      <Column customStyle={{ padding: 0 }}>
        <Paragraph>{message}</Paragraph>
        <Paragraph>{email}</Paragraph>
      </Column>
    );
  }
  return null;
};

export default SocialEmail;
