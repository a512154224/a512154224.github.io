---
layout: post
title: 'N1安装supervisor（管理进程）'
date: 2019-02-22
author: 四天
tags:
      - N1
      - 斐讯
      - supervisor
      - 进程管理
      - 开机启动
      - 服务管理

---
armbian版本：ARMBIAN 5.44 user-built Ubuntu 18.04.2 LTS 3.14.29  
  
用python安装  
root@amlogic:~#apt-get install python-setuptools  
root@amlogic:~#wget https://bootstrap.pypa.io/ez_setup.py -O - | python  
root@amlogic:~#easy_install supervisor  


生成默认配置文件(supervisord.conf)

root@amlogic:~#echo_supervisord_conf > /etc/supervisord.conf


管理进程  
编辑supervisor配置文件  
root@amlogic:~#vi /etc/supervisord.conf  
把以下内容加到/etc/supervisord.conf尾部  
[program:py-kms]  
command=python /usr/local/py-kms/server.py  
autorestart=true  
user=root


以daemon方式运行，执行  
supervisord

停止supervisord  
supervisorctl shutdown

重新加载配置文件  
supervisorctl reload


[进程管理]
启动supervisord管理的所有进程  
supervisorctl start all

停止supervisord管理的所有进程  
supervisorctl stop all

启动supervisord管理的某一个特定进程  
supervisorctl start program-name // program-name为[program:xx]中的xx

停止supervisord管理的某一个特定进程  
supervisorctl stop program-name  // program-name为[program:xx]中的xx

重启所有进程或所有进程  
supervisorctl restart all  // 重启所有  
supervisorctl reatart program-name // 重启某一进程，program-name为[program:xx]中的xx

查看supervisord当前管理的所有进程的状态  
supervisorctl status

需要开机启动的话，在/etc/rc.local尾部添加supervisord即可（exit 0前）