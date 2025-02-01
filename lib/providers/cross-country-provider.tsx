import React from "react";
import { IntlProvider } from "react-intl";
import { french } from "./languages/french";
import { english } from "./languages/english";

interface CrossCountryProviderProps {
  children: React.ReactNode;
  locale?: string;
  messages?: Record<string, string>;
  defaultLocale?: string;
}

const CrossCountryProvider: React.FC<CrossCountryProviderProps> = ({
  children,
  locale = "fr",
  messages = french,
  defaultLocale = "en",
}) => {
  return (
    <IntlProvider messages={messages} locale="fr" defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default CrossCountryProvider;
