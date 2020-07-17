FROM node:7
WORKDIR /app
COPY package.json /app
COPY . /app
ENV PORT=8081
ENV MONGODB_URL=mongodb://redcodemohammed:kLTFWZU7x4cQ@ds111124.mlab.com:11124/url-shortner-app
ENV NODE_ENV=production
RUN npm install
RUN npm start
EXPOSE 8081
