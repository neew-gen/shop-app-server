# Shop-app

### Instructions for deployment on a Heroku:
1. You need to run the 'build' command in the client repository. This command will build and update the files in the 'client/dist' folder. This folder is mounted during deployment.
2. You need to click 'add to git' on the 'client' folder if automatic addition to git is turned off.
3. Make a push to github.
4. Make a deployment in heroku

### The following variables must be set in the heroku instance settings (Config Vars):
MONGODB_USERNAME - mongodb user name (not from the account!)

MONGODB_PASSWORD - password of the user monhodb (not of the account!)

MONGODB_HOST- host url, for example 'cluster*.*****.mongodb.net'

MONGODB_DATABASE - the name of the database

JWT_ACCESS_SECRET - private key for access tokens generation

JWT_REFRESH_SECRET - a secret key to generate upgrade tokens

JWT_ACCESS_EXPIRED - access token lifetime in 'zeit' format (e.g. 10m)

JWT_REFRESH_EXPIRED - refresh token lifetime (e.g. 45d)

