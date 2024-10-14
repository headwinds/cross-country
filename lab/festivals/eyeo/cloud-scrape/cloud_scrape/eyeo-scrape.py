import requests
from bs4 import BeautifulSoup
import json
import re
from flask import Flask, jsonify

app = Flask(__name__)

def scrape_eyeo_crowd_cloud():
    url = "https://eyeofestival.com/eyeo-crowd-cloud/"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    cloud_div = soup.find('div', class_='tagcloud')
    if not cloud_div:
        print("Could not find the tag cloud. The page structure might have changed.")
        return []

    twitter_data = []
    for a in cloud_div.find_all('a'):
        name = a.text.strip()
        style = a['style']
        font_size = re.search(r'font-size:\s*(\d+)px', style)
        if font_size:
            size = int(font_size.group(1))
            # Determine rank based on font size
            if size <= 10:
                rank = 1
            elif size <= 14:
                rank = 2
            elif size <= 18:
                rank = 3
            else:
                rank = 4
            
            twitter_data.append({"name": name, "rank": rank})

    return twitter_data

@app.route('/scrape', methods=['GET'])
def scrape():
    twitter_data = scrape_eyeo_crowd_cloud()
    return jsonify(twitter_data)

@app.route('/export', methods=['GET'])
def export():
    twitter_data = scrape_eyeo_crowd_cloud()
    if twitter_data:
        with open("eyeo_crowd_cloud.json", 'w', encoding='utf-8') as f:
            json.dump(twitter_data, f, ensure_ascii=False, indent=2)
        return jsonify({"message": f"Data exported to eyeo_crowd_cloud.json. Total entries: {len(twitter_data)}"})
    else:
        return jsonify({"error": "No data was scraped. Please check the website structure."})

if __name__ == "__main__":
    app.run(debug=True)
