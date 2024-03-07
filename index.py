import requests 
import json 

url = "https://api.originality.ai/api/v1/scan/ai"

user_input = input("Input text for AI scan: ")

payload = json.dumps({
  "content": user_input,
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


def parse_dict_string(dict_string):
    try:
        # Attempt to parse the string as JSON
        parsed_dict = json.loads(dict_string)
        return parsed_dict
    except json.JSONDecodeError:
        # Handle error if the string is not valid JSON
        print("Error: Invalid JSON format")
        return None

# Example usage
parsed_dict = parse_dict_string(dict_string)
if parsed_dict:
    print(parsed_dict["score"])
