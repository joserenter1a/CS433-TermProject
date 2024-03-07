import tkinter as tk
import requests 
import json 

def parse_dict_string(dict_string):
    try:
        # Attempt to parse the string as JSON
        parsed_dict = json.loads(dict_string)
        return parsed_dict
    except json.JSONDecodeError:
        # Handle error if the string is not valid JSON
        print("Error: Invalid JSON format")
        return None
    

        
def ai_scan():
    url = "https://api.originality.ai/api/v1/scan/ai"

    payload = json.dumps({
    "content": text_entry.get("1.0", "end-1c"),
    "title": "optional title",
    "aiModelVersion": "1",
    "storeScan": "false"
    })
    headers = {
    'X-OAI-API-KEY': 'xodrg2zq5987kfcsjwimlhtn1by6u3vp',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    dict_string = response.text
    score = 0
    parsed_dict = parse_dict_string(dict_string)
    if parsed_dict:
        score = (parsed_dict["score"])
    word_count_label.config(text="AI Generation Score: {}".format(score))
    return score


# Create main window
root = tk.Tk()
root.title("Word Count App")

# Create text entry widget
text_entry = tk.Text(root, height=10, width=40)
text_entry.pack(pady=10)

# Create count button
count_button = tk.Button(root, text="Scan for AI", command=ai_scan)
count_button.pack()

# Create label to display word count
word_count_label = tk.Label(root, text="AI Generation Score: ")
word_count_label.pack(pady=5)

# Run the Tkinter event loop
root.mainloop()
