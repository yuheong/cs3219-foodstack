# Simple web server built with Nginx & Docker

## To start the server
Run ```docker-compose-up``` within this directory to automatically bring up the 3 Docker containers:
- reverse-proxy: Nginx reverse proxy to direct incoming http requests to their respective ports
- webapp: React Frontend application with a simple button to retrieve random food choices from the backend
- menu-service: Simple Flask server that returns a random food item from a list of Singaporean local dishes

Access the webapp on <http://localhost>, press the button to retrieve a random food item from the backend.

## Troubleshooting instructions
1. If you encounter any CORS request issues, ensure you are on <http://localhost> instead of <http://localhost:3000>
2. If your Docker containers aren't starting properly, bring them dwon with ```docker-compose down```. Then, run this command: ```docker-compose up -d --build``` to rebuild the containers and run in the background.