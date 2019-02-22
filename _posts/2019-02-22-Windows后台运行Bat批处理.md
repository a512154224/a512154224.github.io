---
layout: post
title: 'Windows后台运行Bat批处理'
date: 2019-02-22
author: 四天
tags:
      - Windows
      - 后台运行
      - bat
      - 批处理

---

# 方法一: #
bat里有隐藏窗口的命令，很简单，只需要在代码头部加一段代码就可以了。
 
@echo off   
if "%1" == "h" goto begin 
mshtavbscript:createobject("wscript.shell").run("%~nx0 h",0)(window.close)&&exit   
:begin  
下面是你自己的代码。
# 方法二: #
可以编辑一个vbs脚本，在其中以隐藏窗口运行批处理程序。  
Set ws = CreateObject("Wscript.Shell")  
ws.run "cmd /c 1.bat",vbhide
 
以上代码拷贝到记事本中，保存为"1.vbs"或者其它的名字（扩展名必须是.vbs），然后点击运行生成的脚本1.vbs，即可隐藏运行指定的批处理程序。
