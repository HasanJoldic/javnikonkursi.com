FROM node:16
ARG ENV

USER node
RUN mkdir -p /home/node/code

WORKDIR /home/node/code
COPY --chown=node:node . ./
RUN rm -rf services/frontend
RUN scripts/docker/install.sh

RUN yarn workspace @javnikonkursi/backend build

CMD [ "yarn", "workspace", "@javnikonkursi/backend", "start"]
