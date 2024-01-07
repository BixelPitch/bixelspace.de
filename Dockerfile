FROM oven/bun:1 as base
WORKDIR /usr/src/app

FROM base as install
COPY . .
RUN bun run build

FROM base as release
COPY --from=install .output/ .
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "server/index.mjs" ]
