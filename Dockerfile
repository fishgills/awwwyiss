FROM node
RUN npm install nodemon -g

WORKDIR /usr/src/app
CMD ["npm", "start"]