---
layout: post
title: 'ubuntu临时或永久修改hostname的方法'
date: 2019-02-20
author: 四天
tags: 
      - hostname
      - ubuntu 
---

## 1、查看hostname ##
<pre><code class="language-css">hostname 或 uname -n</code></pre>
## 2.1、临时修改hostname ##
<pre><code class="language-css">hostname new_hostname</code></pre>
## 2.2、永久修改hostname ##
<pre><code class="language-css">vi /etc/hostname</code></pre>
直接修改为new_hostname保存
<pre><code class="language-css">vi /etc/hosts</code></pre>
修改以下即可：  
<pre><code class="language-css">127.0.0.1 localhost  
127.0.1.1 new_hostname</code></pre>
修改完成！