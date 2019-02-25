---
layout: post
title: 'Nextcloud挂载数据盘(NTFS)'
date: 2019-02-22
author: 四天
tags:
      - Nextcloud
      - NTFS
      - 数据盘
      - 网盘
      - 挂载

---
armbian版本：ARMBIAN 5.44 user-built Ubuntu 18.04.2 LTS 3.14.29  
  
nextcloud部署完后，在数据目录下的file目录下创建挂载NTFS的目录  
<pre><code class="language-css">root@amlogic:~#mkdir -p /var/www/html/syncloud/data/liangst/files/mydisk</code></pre>

把NTFS挂载在该目录（建议开机挂载）  
<pre><code class="language-css">root@amlogic:~#mount -t ntfs-3g /dev/sda1 /var/www/html/syncloud/data/liangst/files/mydisk</code></pre>

切换到nextcloud安装目录，执行刷新nextcloud文件目录索引的命令  
<pre><code class="language-css">root@amlogic:~#cd /var/www/html/syncloud/  
root@amlogic:/var/www/html/syncloud/#sudo -u www-data php occ files:scan --all --quiet</code></pre>

如果需要解除挂载磁盘，但又报device is busy

<pre><code class="language-css">fuser -km /var/www/html/syncloud/data/liangst/files/mydisk  
umount -t ntfs-3g /dev/sda1</code></pre>