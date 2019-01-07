let toggle =  `visible` // set variable to allow button to toggle map appearance

function initMap() {
    var gaMiddle = {lat: 32.838131, lng: -83.634705}
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: gaMiddle})
    }

    $('.button').click((event) => {
    event.preventDefault()
    if (toggle === `visible`){
        $('#map').css(`visibility`, toggle)
        toggle = `hidden`
    } else{
        $('#map').css(`visibility`, toggle)
        toggle = `visible`
    }  
})