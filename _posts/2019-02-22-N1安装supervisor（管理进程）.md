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
<pre><code class="language-css">root@amlogic:~#apt-get install python-setuptools  
root@amlogic:~#wget https://bootstrap.pypa.io/ez_setup.py -O - | python  
root@amlogic:~#easy_install supervisor</code></pre>  


生成默认配置文件(supervisord.conf)

<pre><code class="language-css">root@amlogic:~#echo_supervisord_conf > /etc/supervisord.conf</code></pre>


管理进程  
编辑supervisor配置文件  
<pre><code class="language-css">root@amlogic:~#vi /etc/supervisord.conf </code></pre> 
把以下内容加到/etc/supervisord.conf尾部  
<pre><code class="language-css">[program:py-kms]  
command=python /usr/local/py-kms/server.py  
autorestart=true  
user=root</code></pre>


以daemon方式运行，执行  
<pre><code class="language-css">supervisord</code></pre>

停止supervisord  
<pre><code class="language-css">supervisorctl shutdown</code></pre>

重新加载配置文件  
<pre><code class="language-css">supervisorctl reload</code></pre>


[进程管理]
启动supervisord管理的所有进程  
<pre><code class="language-css">supervisorctl start all</code></pre>

停止supervisord管理的所有进程  
<pre><code class="language-css">supervisorctl stop all</code></pre>

启动supervisord管理的某一个特定进程  
<pre><code class="language-css">supervisorctl start program-name // program-name为[program:xx]中的xx</code></pre>

停止supervisord管理的某一个特定进程  
<pre><code class="language-css">supervisorctl stop program-name  // program-name为[program:xx]中的xx</code></pre>

重启所有进程或所有进程  
<pre><code class="language-css">supervisorctl restart all  // 重启所有  
supervisorctl reatart program-name // 重启某一进程，program-name为[program:xx]中的xx</code></pre>

查看supervisord当前管理的所有进程的状态  
<pre><code class="language-css">supervisorctl status</code></pre>

需要开机启动的话，在/etc/rc.local尾部添加supervisord即可（exit 0前）