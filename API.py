from flask import Flask, jsonify, request, render_template
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('wip_search.html')

@app.route('/wips', methods=['GET'])
def get_wips():
    title = request.args.get('title').lower()
    with open('wips.json') as f:
        data = json.load(f)

    book_info = next((book for book in data if book.get('title').lower() == title), None)
    if book_info:
        return jsonify(book_info)
    else:
        return jsonify({"error": "Book not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)