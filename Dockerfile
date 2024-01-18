FROM node:20-alpine as base
WORKDIR /usr/src/app

FROM base as build
COPY --link package.json package-lock.json ./
RUN npm install
COPY --link . .
RUN npm run build
RUN npm prune

FROM base
COPY --from=build /usr/src/app/.output .
EXPOSE 3000
ENTRYPOINT [ "node", "./server/index.mjs" ]
