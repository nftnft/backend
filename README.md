# NFTNFT Backend

Inital repo was made using these sources:
https://blog.travis-ci.com/2019-05-30-setting-up-a-ci-cd-process-on-github
https://pokedpeter.dev/#/?id=tutorial-start

Travis-CI link:
https://travis-ci.com/github/nftnft/backend

# Dev Notes

Install dependencies
```
npm install
```

Run tests
```
npm run test
```

Run linter
```
npm run lint
```

Run dev instance locally through npm
```
npm run start:dev
```


Run docker compose test instance locally (closer to what we have in prod)
```
docker compose up
docker compose up -d # detached so that the server keeps running even if terminal goes away
```

# Deploying Image to our docker repository
```
docker build --push -t registry.digitalocean.com/nftnft:0.2.0-test .
```

## M1 Silicon Only Notes

To properly push images to our docker registry, follow these instructions:
https://betterprogramming.pub/how-to-actually-deploy-docker-images-built-on-a-m1-macs-with-apple-silicon-a35e39318e97

In a nutshell:

Set up and use your builder.
```
docker buildx create --name m1_builder
docker buildx use m1_builder
docker buildx inspect --bootstrap
```

Then build/push your image:
```
docker buildx build --platform linux/amd64  --push -t registry.digitalocean.com/nftnft/calendar:0.2.0-test .
```




