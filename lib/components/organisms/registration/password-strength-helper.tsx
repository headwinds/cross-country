import React, { useEffect } from "react";
import { Column, Paragraph } from "../../";
import styles from "./registration.module.css";
import {
  validatePasswordHasUpperCase,
  validatePasswordHasLowerCase,
  validatePasswordHasNumber,
  validatePasswordHasSpecialCharacter,
  validatePasswordMinimumLength,
} from "./registration-util";
import { ShieldWarning, CheckCircle } from "@phosphor-icons/react";

const passwordParagraphStyle = { margin: 0, padding: 0, fontSize: 12 };

const PasswordStrengthHelper = ({
  isPasswordFocussed,
  candidatePassword = "",
}) => {
  const hasUpperCase = validatePasswordHasUpperCase(candidatePassword);
  const hasLowerCase = validatePasswordHasLowerCase(candidatePassword);
  const hasNumber = validatePasswordHasNumber(candidatePassword);
  const hasSpecialCharacter =
    validatePasswordHasSpecialCharacter(candidatePassword);
  const hasMinimumLength = validatePasswordMinimumLength(candidatePassword);
  const isPasswordValid =
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialCharacter &&
    hasMinimumLength;

  return isPasswordFocussed ? (
    <Column customClass={styles.passwordStrengthHelperContainer}>
      {!isPasswordValid ? (
        <Column customClass={styles.passwordHelperIcon}>
          <ShieldWarning size={32} color="grey" />
        </Column>
      ) : (
        <Column customClass={styles.passwordHelperIcon}>
          <CheckCircle size={32} color="green" />
        </Column>
      )}
      <Paragraph
        customStyle={{
          ...passwordParagraphStyle,
          color: hasMinimumLength ? "green" : "#666",
        }}
      >
        At least 8 characters
      </Paragraph>
      <Paragraph
        customStyle={{
          ...passwordParagraphStyle,
          color: hasUpperCase ? "green" : "#666",
        }}
      >
        1 uppercase
      </Paragraph>
      <Paragraph
        customStyle={{
          ...passwordParagraphStyle,
          color: hasLowerCase ? "green" : "#666",
        }}
      >
        1 lowercase
      </Paragraph>
      <Paragraph
        customStyle={{
          ...passwordParagraphStyle,
          color: hasNumber ? "green" : "#666",
        }}
      >
        1 number
      </Paragraph>
      <Paragraph
        customStyle={{
          ...passwordParagraphStyle,
          color: hasSpecialCharacter ? "green" : "#666",
        }}
      >
        1 special character
      </Paragraph>
    </Column>
  ) : null;
};

export default PasswordStrengthHelper;
