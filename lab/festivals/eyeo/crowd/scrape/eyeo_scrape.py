import requests
from bs4 import BeautifulSoup
import json
import re

def scrape_eyeo_crowd_cloud():
    print("Scraping EyeO Crowd Cloud")
    url = "https://eyeofestival.com/eyeo-crowd-cloud/"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    cloud_div = soup.find('div', id='g-crowd-cloud-web-Artboard_1-graphic')
    if not cloud_div:
        print("Could not find the crowd cloud div. The page structure might have changed.")
        return []

    artist_data = []
    for artist_div in cloud_div.find_all('div'):
        artist_p = artist_div.find('p')
        if artist_p:
            name = artist_p.text.strip()
            # class_attr = artist_p.get('class', [])
             # Debug print
            style = artist_p.get('style', '')
            font_size_match = re.search(r'font-size:\s*(\d+(?:\.\d+)?)px', style)
            print(f"Name: {name}, font_size_match: {font_size_match}")

            '''
            given a p tag like <p class="g-aiPstyle0" style="font-size: 12px;">hdeweyh</p>
            it's not possibly to parse the font size from the class attribute
            using beautiful soup

            so instead let's just create 2 signal ranks 
            '''

            top_signals = ["laurmccarthy", "kcimc", "toxi", "shashashasha", "feltron", "curiousoctopus", "theowatson", "stamen", "aaronkbolin", "ben_fry", "moritz_stefaner", "wesleygrubbs", "mbostock", "shiffman", "blprnt", "alignleft", "golan"]

            mid_signals = ["rachelbinx", "obvious", "jakebarton", "drawnline", "fctry", "katecrawford", "moebio", "drawnline"]

        
            if name in top_signals:
                signal = 1
            elif name in mid_signals:
                signal = 2
            else:
                signal = 3
            
            artist_data.append({"name": name, "signal": signal})
  

    return artist_data

def export_to_json(data, filename):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    print("Starting the script")
    twitter_data = scrape_eyeo_crowd_cloud()
    if twitter_data:
        export_to_json(twitter_data, "eyeo_crowd_cloud.json")
        print(f"Data exported to eyeo_crowd_cloud.json. Total entries: {len(twitter_data)}")
    else:
        print("No data was scraped. Please check the website structure.")
