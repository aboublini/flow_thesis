# docker login flowcontainer.azurecr.io
# docker build . -t flowcontainer.azurecr.io/flow-female:v1.0.0
# docker push flowcontainer.azurecr.io/flow-female:v1.0.0
FROM node:18


# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install && npm install -g serve
#RUN npm run build
CMD ["npm", "run", "start"]
#CMD [ "serve", "-s", "build"]
