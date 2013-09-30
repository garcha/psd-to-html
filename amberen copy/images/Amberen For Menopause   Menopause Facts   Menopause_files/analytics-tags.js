_urq.push(['_resourcesLoaded', 'TrackingPixels', (function() {
	var urls = [];

	// Example: urls.push(location.protocol + '//server.adformdsp.net/serving/cookie/match/?party=1001&cid={RespondentId}&Today={Date}');
	// Begin tracking pixels configuration

	urls.push(location.protocol + '//server.adformdsp.net/serving/cookie/match/?party=1001&cid={RespondentId}&Today={Date}');
	//urls.push(location.protocol + '//uip.semasio.net/omdscandinavia/1/info?sType=track&sExtCookieId={RespondentId}&Today={Date}');
	if (location.protocol == 'http:') {
		urls.push('http://visitanalytics.userreport.com/hit.gif?t=USR0000112ImpsFromInvitation&Today={Date}');
	}

	// End tracking pixels configuration
	return urls;
})()]);
