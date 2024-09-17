from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Load the JSON data
with open('blocks.json', 'r') as file:
    data = json.load(file)

# print the first 1 record
#print(data[:1])

# Create an index for faster lookup by userId
data_index = {}
for item in data:
    owner_login = item['owner']['login']
    if owner_login not in data_index:
        data_index[owner_login] = []
    data_index[owner_login].append(item)

@app.route('/query', methods=['GET'])
def query_data():
    # userId = request.args.get('userId')
    owner_login = "headwinds"
    if owner_login in data_index:
        return jsonify(data_index[owner_login])
    else:
        return jsonify([])

if __name__ == '__main__':
    app.run(debug=True, port=4000, host='0.0.0.0')