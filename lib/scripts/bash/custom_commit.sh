#!/bin/bash

# Define the custom message
custom_message=$1

# Define the static text with a short verse from Alice in Wonderland
static_text="
\"We're all mad here,\" said the Cheshire Cat.
"

# Define a list of colors
colors=("red" "green" "blue" "yellow" "magenta" "cyan")

# Select a random color
random_color=${colors[$RANDOM % ${#colors[@]}]}

# Prompt the user with the custom message in the random color
echo -e "\033[38;5;$random_color\033[1m$custom_message\033[0m"

# Display the static text
echo "$static_text"

# Ask the user for a yes or no response
read -p "Do you want to commit? (yes/no) " response

# Check the user's response
if [ "$response" = "yes" ]; then
  # Commit the changes
  git commit -m "$custom_message"
else
  # Abandon the commit
  echo "Commit abandoned."
fi