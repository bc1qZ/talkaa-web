FROM node:22-alpine

WORKDIR /app

COPY backend/package.json ./backend/package.json
RUN cd backend && npm install

COPY . .

WORKDIR /app/backend

ENV NODE_ENV=production
ENV PORT=8787

EXPOSE 8787

CMD ["npm", "start"]
