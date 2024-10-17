from flask import Flask, jsonify
from flask_cors import CORS
from scrape.eyeo_scrape import scrape_eyeo_crowd_cloud  # Note the dot at the beginning

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def scrape_hi():
    return "Start your scraping... /scrape"

@app.route('/scrape', methods=['GET'])
def scrape_and_return():
    twitter_data = scrape_eyeo_crowd_cloud()
    if twitter_data:
        return jsonify(twitter_data)
    else:
        return jsonify({"error": "No data was scraped. Please check the website structure."}), 500

if __name__ == "__main__":
    app.run(debug=True)
