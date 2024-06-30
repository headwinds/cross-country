import Quote from "./quote";

export default {
  title: "design system/molecules/quote",
};

export const Quote = {
  render: () => (
    <Quote
      source={{
        author: "Piers Anthony",
        work: "A Spell for Chameleon",
        url: "https://www.penguinrandomhouse.ca/books/4295/blue-adept-by-piers-anthony/9780345352453/excerpt",
      }}
      text="How many people similarly spent their lives searching for their own spells—some gratuitous benefit such as a silver tree or political power or undeserved acclaim—when all they really needed was to be satisfied with what they already had? Sometimes what they had was better than what they thought they wanted."
    >
      hey
    </Quote>
  ),

  name: "quote",
};
