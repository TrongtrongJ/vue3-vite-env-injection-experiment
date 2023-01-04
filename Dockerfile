FROM --platform=linux/amd64 node:16.14.0 AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM node:16-alpine
ENV TZ=Asia/Bangkok

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

EXPOSE 9000
CMD ["serve", "-s", "dist", "-l", "9000"]

# FROM nginx:stable-alpine AS nginx
# ENV TZ=Asia/Bangkok

# COPY --from=builder /app/dist/ /usr/share/nginx/html/

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;" ]