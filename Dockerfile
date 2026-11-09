FROM node:20
WORKDIR /usr/src/app
COPY package* ./

COPY . .
RUN npm install --production=false
RUN chown -R node:node /usr/src/app
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
