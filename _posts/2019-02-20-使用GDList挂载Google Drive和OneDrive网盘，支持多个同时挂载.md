---
layout: post
title: '使用GDList挂载Google Drive和OneDrive网盘，支持多个同时挂载'
date: 2019-02-20
author: 四天
tags:
      - 挂载
      - GoogleDrive
      - OneDrive
      - 网盘
      - GDList
---
# 简介 #
GDList可以将Google Drive和OneDrive分享出的文件夹ID挂载成网盘。即使你没网盘也没关系。还不占服务器空间，不消耗服务器流量；可多个Google Drive和OneDrive同时挂载到网盘；支持直链下载、在线预览（图片、视频、音频）。
Github地址：https://github.com/reruin/gdlist

系统要求：CentOS、Debian、Ubuntu
运行命令：

## Debian/Ubuntu系统 ##
apt-get -y install git
## CentOS/RHEL系统 ##
yum -y install git
## 下载源码安装 ##
git clone https://github.com/reruin/sharelist.git
cd sharelist && bash install.sh  
完成后，访问http://ip:33001 进入界面开始设置，记住网盘文件夹要共享一下，不然会出现500错误。  
![](https://raw.githubusercontent.com/a512154224/a512154224.github.io/master/picture/1004489020.png)  
注意输入的ID，添加后记得清空缓存。

## Google Drive ##
分享链接一般是https://drive.google.com/drive/folders/xxxx?usp=sharing 则ID为xxxx。

## OneDrive ##
分享链接一般是https://1drv.ms/f/xxxx 则ID为xxxx。