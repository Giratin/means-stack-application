# mean-stack-docker-compose

This code consist of 4 applications, each running in its own docker container.

- `nginx`, reverse proxy
- `server`, node.js express serving handling api requests
- `froont`, webpack powered angular frontend
- `mongo`, mongodb database

![container overview](https://github.com/Giratin/means-stack-application/raw/master/containers_overview_mean_stack.png)

## Prerequisites

- `docker` (tested on `19.03.6`)
- `node.js` (tested on `12.18.3`)

## Install

```
git clone git@github.com:Giratin/means-stack-application.git

cd means-stack-application

docker-compose up -d --build
```


