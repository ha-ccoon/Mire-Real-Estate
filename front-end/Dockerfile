FROM node:20.0.0-alpine
WORKDIR /source
COPY . /source
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 3000