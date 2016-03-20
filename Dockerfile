FROM node:5-onbuild
EXPOSE 8080
RUN npm run deploy
RUN npm test
CMD ["npm", "run", "prod-server"]
