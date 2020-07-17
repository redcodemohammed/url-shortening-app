FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV PORT=8081
ENV MONGODB_URL=mongodb://redcodemohammed:kLTFWZU7x4cQ@ds111124.mlab.com:11124/url-shortner-app
ENV NODE_ENV=production
CMD node dist/server/app
EXPOSE 8081
