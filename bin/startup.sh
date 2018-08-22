#!/bin/sh

cpu=$(cat /proc/cpuinfo | grep "processor" | wc -l)
if [ $cpu -gt 8 ]; then
	cpu=8
fi

cd $(dirname $BASH_SOURCE)
cd ..
appid=$(basename $(pwd))
appname=node-app-$appid

pm2 delete $appname
pm2 start npm \
	-i $cpu\
	--name $appname\
	--merge-logs\
	--log-date-format="YYYY-MM-DD HH:mm:ss"\
	--log /opt/logs/$appid/outerr.log\
	--output /opt/logs/$appid/out.log\
	--error /opt/logs/$appid/err.log\
	-- start
pm2 web
pm2 dump