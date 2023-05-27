
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app


COPY package.json package-lock.json ./
COPY . ./


RUN npm ci --production

EXPOSE 8080


CMD ["npm", "run", "start"]
