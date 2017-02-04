# wechat-connect

this is a demo for development of WeChat Official Accounts. You should deploy a nginx on outer net and use ssh tunnel to debug on local.

# Getting Started

```bash
$ npm install                                         # Install project dependencies
$ ssh -R 3000:localhost:3000 root@[your server] -N    # open ssh tunnel
```

# Config for nginx

[click me](https://zhuanlan.zhihu.com/p/25071391)