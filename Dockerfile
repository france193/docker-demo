FROM node:12
USER node
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start
