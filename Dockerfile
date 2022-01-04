FROM node:12
USER node
WORKDIR /app
ADD . /app
RUN sudo chown -R 128:134 "/.npm"
RUN npm install
EXPOSE 3000
CMD npm start
