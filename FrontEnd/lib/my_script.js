$(document).ready(function(){
	
	console.log('This is ready');
	navigator.geolocation.getCurrentPosition(success, error);
	
	function success(position){
	  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  var mapProp = {
		center:latlng,
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("my_map"),mapProp);
		
      var marker = new google.maps.Marker({
		  position: latlng, 
		  map: map, 
		  title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
  })
		
	}
	
	function error(){
		
		console.log("Geolocation not supported by browser");
	}
	
});