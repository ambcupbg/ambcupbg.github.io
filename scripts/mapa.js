function initialize() {
        var map_canvas = document.getElementById('map_canvas');

        var myLatlng = new google.maps.LatLng(44.789028, 20.433584);

        var map_options = {
          center: myLatlng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)

        var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Venue"
    });
      }



google.maps.event.addDomListener(window, 'load', initialize);