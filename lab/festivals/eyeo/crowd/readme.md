# Eyeo Festival Crowd Cloud Scraper

This Python script scrapes the Eyeo Festival Crowd Cloud page (https://eyeofestival.com/eyeo-crowd-cloud/) and exports the Twitter names and their corresponding ranks to a JSON file.

## Prerequisites

- Python 3.6 or higher
- pip (Python package installer)

## Installation

1. Clone this repository or download the `app.py` and `requirements.txt` files.

2. Install & Run
3. ```
   poetry install
   poetry shell
   python3 app.py
   ```

4. The script will scrape the Eyeo Festival Crowd Cloud page and create a file named `eyeo_crowd_cloud.json` in the same directory.

5. The JSON file will contain an array of objects, each with a "name" (Twitter handle) and "rank" (1-4, based on font size).

## Rank Information

The ranks are determined based on the font size of the Twitter handles on the page:

- Rank 1: Font size <= 10px (least connected)
- Rank 2: 10px < Font size <= 14px
- Rank 3: 14px < Font size <= 18px
- Rank 4: Font size > 18px (most connected)

## Note

This script is dependent on the current structure of the Eyeo Festival Crowd Cloud page. If the page structure changes, the script may need to be updated accordingly.
