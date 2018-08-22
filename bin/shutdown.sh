#!/bin/sh
cd $(dirname $BASH_SOURCE)
cd ..
appid=$(basename $(pwd))
appname=node-app-$appid

pm2 delete $appname
pm2 delete pm2-http-interface
pm2 dump