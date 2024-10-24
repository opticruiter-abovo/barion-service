FROM node:18

RUN mkdir -p "/home/node/app/node_modules" && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Test
COPY .env /home/node/app/.env
COPY --chown=node:node *.json ./
COPY --chown=node:node .* ./
COPY --chown=node:node src/ ./src/
USER node

RUN npm install

RUN npm run build

EXPOSE 8081

CMD [ "npm", "run", "start:prod" ]
