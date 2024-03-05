import { useState } from "react";
import Autocomplete from "../autocomplete";
import { SubHeadline, Paragraph, Column, Span, Form } from "../../../../../";

function AutocompleteStory() {
  return (
    <Column customStyle={{ width: 400 }}>
      <Autocomplete />
    </Column>
  );
}

export default TextInputStory;
