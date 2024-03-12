import { useState } from "react";
import Autocomplete from "../autocomplete";
import { SubHeadline, Paragraph, Column, Span, Form } from "../../../../../";

// a user should be configure this list and pick which ones matter to them
// also be be able to recommend certain niche ones to an admin
// like sci-fi or fantasy sub genres
const allCategories = [
  "Architecture",
  "Design",
  "Gaming",
  "Music",
  "Technology",
  "Sports",
  "Film",
  "Photography",
  "Art",
  "Fashion",
  "Math",
  "Science",
  "History",
  "Geography",
  "Literature",
  "Languages",
  "Financial",
  "Politics",
  "Other",
];

function AutocompleteStory() {
  return (
    <Column customStyle={{ width: 400 }}>
      <Autocomplete />
    </Column>
  );
}

export default TextInputStory;
