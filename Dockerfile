#SI
#FROM node:16.10.0-alpine
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install
#RUN yarn install
#COPY . .
#RUN yarn run build
#RUN chmod 777 ./node_modules


#NO
#RUN npm run build
#RUN npm install
#RUN yarn run build
#RUN npm audit fix --force


#SI
#EXPOSE 4200
#CMD ["yarn", "run", "start"]



#NO
#CMD ["ng", "start", "build"]
#CMD ["start", "--host", "0.0.0.0"]

FROM node:14.17.5-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
FROM nginx:latest
COPY --from=build /usr/src/app/dist/mi-negocio-angular /usr/share/nginx/html
EXPOSE 80