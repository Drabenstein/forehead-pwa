FROM node:lts AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY . .
RUN npm run build

FROM fholzer/nginx-brotli:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist/ .