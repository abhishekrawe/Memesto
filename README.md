# Memesto

**Crio Winter of Doing, Stage-2B**
MemeGen is a web application where the user gives an image as input and our tool generates a meme at one click for the user
ad You can also add the Admin name here and  caption for the Meme

**Tech Stack used:**

* ReactJS
* ExpressJS
* NodeJS
* Axios
* Cors

**Deployed Frontend:** https://memesto.netlify.app/

**Deployed Backend:** https://memesto.herokuapp.com/

**To run frontend:**

cd client

npm install

npm start

**To run backend:**

cd server

npm install

npm start

**Backend API Endpoints:**


| endpoint | method | Description |
| - | - | - |
| **`/memes`** | **GET** | Returns the current state of Database 'memes' |
| **`/memes`** | **POST** | To Post a json having keys`name`,`caption`,`url` |
| **`/memes/<id>`** | **GET** | Returns the value of an Object having key`id` of value `<id>` |
| **`/memes/<id>`** | **PATCH** | Updates the Object in Database 'memes' having key`id` of value `<id>`. Requires json having keys: `caption`,`url` |
| **`/`** | **ALL** | Returns "Hellow" |
