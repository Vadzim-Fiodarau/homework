FROM node:10

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
ADD . /app

# start app
CMD ["npm", "start"]
