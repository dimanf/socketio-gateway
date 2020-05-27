# The simple Socket-io Gateway Server 🚀

[//]: # "head-end"

The server written in latest versions of:

- [NodeJS](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [SocketIO](https://github.com/socketio/socket.io)

## Run server

Clone the project.

```
$ git clone git@gitlab.oits.su:oits/socketio-gateway.git
```

Install dependencies:

- Without docker

```
$ npm i
```

- With docker

```
$ docker build -t socketio-gateway .
```

Start the server:

- Without docker

```
$ npm run server
```

- With docker

```
$ docker run --rm -v ~/projects/socketio-gateway:/app -p 127.0.0.1:8881:3000 --name socketio-gateway -i socketio-gateway
```

## Peace! ✌😜
