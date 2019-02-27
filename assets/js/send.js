// Author: 四天
   
   if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","url.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;
    var url = xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
	function send(){
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var content = document.getElementById("content").value;
		if (name=="")
			{
			alert("昵称不能为空！");
			document.getElementById('name').focus();
			return;
			}
		else if (email=="")
			{
			alert("邮箱不能为空！");
			document.getElementById('email').focus();
			return;
			}
		else if (content=="")
			{
			alert("内容不能为空！");
			document.getElementById('content').focus();
			return;
			}
		else
			{
			url = url + "昵称-" + name + "_EMAIL-" + email + "&desp=" + content;
			var request = new XMLHttpRequest();
			request.open("POST", url);
			request.send();
			alert("发送成功！");
			document.getElementById('name').value="";
			document.getElementById('email').value="";
			document.getElementById('content').value="";
			}
		}