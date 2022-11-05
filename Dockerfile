FROM node:18-alpine as builder
WORKDIR '/app'
# copy yarn.lock to be sure that we install last working dependencies version
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
# secret envs should be deleted from dockerfile and retrived from API 

FROM nginx:1.23
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
