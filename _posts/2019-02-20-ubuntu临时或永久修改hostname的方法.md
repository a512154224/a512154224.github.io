---
layout: post
title: 'ubuntu临时或永久修改hostname的方法'
date: 2019-02-20
author: 四天
tags: hostname,ubuntu 
---

## 1、查看hostname ##
<TEXTAREA>hostname 或 uname -n</TEXTAREA>
## 2.1、临时修改hostname ##
hostname new_hostname
## 2.2、永久修改hostname ##
vi /etc/hostname
## 3、直接修改为new_hostname保存 ##
vi /etc/hosts
修改以下即可：  
127.0.0.1 localhost  
127.0.1.1 new_hostname  
修改完成！