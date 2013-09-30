var sWOGateway   = "server3gateway.clickandchat.com"; 
var sWOGatewaySSL= "server3gateway.clickandchat.com";
var sWODomain    = "www.amberen.com";
var sWOChatstart = "https://server3.clickandchat.com/chat/chatstart.htm";
var sWODepartment="";sWOSkillNames="";
var sWOLanguage="";
var sWOBackgroundURL="";
var sWOResponse="Y";
var sWOInvite="Y";
var sWOPreselect="";
var sWOUser="";
var sWOPage="";
var sWOCost=0;var sWORevenue=0;
var sWOName="";var sWOCompany="";var sWOEmail="";var sWOTelephone="";
var sWOProtocol=window.location.protocol;
var sWOImage=document.createElement('img');
var sWOChatElement;var sWOSession;var sWOUrl;
sWOImage.border=0;
(function () {
if(sWOUser==""){
	var dt=new Date();var sWOCookie=document.cookie.toString();
	if(sWOCookie.indexOf("clickandchat.com")==-1){sWOSession=parseInt(Math.random()*1000)+"-"+dt.getTime();document.cookie="clickandchat.com="+sWOSession+";expires=Thu, 31-Dec-2020 00:00:00 GMT; path=/";}
	sWOCookie=document.cookie.toString();
	if(sWOCookie.indexOf('clickandchat.com')==-1){sWOSession="";} else {
		var s=sWOCookie.indexOf("clickandchat.com=")+"clickandchat.com=".length;var e=sWOCookie.indexOf(";",s);
		if(e==-1)e=sWOCookie.length;sWOSession=sWOCookie.substring(s,e);}}
if(sWOProtocol=="https:")sWOGateway=sWOGatewaySSL;if(sWOUser!="")sWOSession=sWOUser;if(sWOProtocol=="file:")sWOProtocol="http:"; })();
function sWOStartChat(){window.open(sWOChatElement.href,"Chat","width=484,height=361");return false;}
function sWOImageLoaded(){if (sWOImage.width==1) {return;}sWOChatElement.href=sWOChatstart;sWOChatElement.target = "_blank";sWOChatElement.appendChild(sWOImage);sWOChatElement.onclick=sWOStartChat;}
function sWOTrackPage(){
	if(sWOPage=="")sWOPage=escape(window.location);
	sWOUrl=sWOProtocol+"//"+sWOGateway+"/stat.gif?u="+sWOSession+"&d="+sWODomain;
	if(sWODepartment.length>0)sWOUrl+="&t="+escape(sWODepartment);
	sWOUrl+="&p='"+sWOPage+"'&r='"+escape(document.referrer)+"'";
	if(sWOCost!=0)sWOUrl+="&c="+sWOCost;if(sWORevenue!=0)sWOUrl+="&v="+sWORevenue;
	if(sWOName!=""||sWOCompany!=""||sWOEmail!=""||sWOTelephone!="")sWOUrl+="&n="+sWOName+"|"+sWOCompany+"|"+sWOEmail+"|"+sWOTelephone;
	if(sWOResponse==""){
		if(document.layers)document.write("<layer name=\"clickandchat.com\" visibility=hide><img src=\""+sWOUrl+"\" height=1 width=1><\/layer>");
		else document.write("<div id=\"clickandchat.com\" STYLE=\"position:absolute;visibility:hidden;\"><img src=\""+sWOUrl+"\" height=1 width=1><\/div>");}
		else {
		sWOImage.onload=sWOImageLoaded;sWOChatElement=document.getElementById('clickandchat.com_chat_link');
		if(! sWOChatElement){document.write("<a id='clickandchat.com_chat_link'></a>");sWOChatElement = document.getElementById('clickandchat.com_chat_link');}
        sWOUrl+="&response=g";sWOChatstart+="?domain="+sWODomain;if(sWOLanguage.length>0)sWOChatstart+="&lang="+sWOLanguage;
		if(sWOBackgroundURL!="")sWOChatstart+="&bg="+sWOBackgroundURL;if(sWODepartment.length>0)sWOChatstart+="&dept="+escape(sWODepartment);if(sWOPreselect.length>0)sWOChatstart+="&select="+sWOPreselect;
		if(sWOSkillNames!="")sWOChatStart+="&sn="+escape(sWOSkillNames);
		sWOUrl+='&timestamp='+(new Date()).getTime();
		if(sWOSession!=''){sWOChatstart+='&session='+sWOSession;}
		sWOImage.src = sWOUrl;	
	}
	sWOUrl=sWOProtocol+"//"+sWOGateway+"/invite.js?domain="+sWODomain;if(sWOInvite=="Y")document.write("<sc"+"ript src='"+sWOUrl+"'><\/scr"+"ipt>");
}
