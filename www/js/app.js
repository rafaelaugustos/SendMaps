$(function(){
    $('#go').on('click', function(){
        var latitude  = $('input[name=latitude]').val(); 
        var longitude = $('input[name=longitude]').val();
        alert(latitude+' - '+longitude);
        launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function(isAvailable){
            var app;
            if(isAvailable){
                app = launchnavigator.APP.GOOGLE_MAPS;
            }else{
                console.warn("Google Maps não esta instalado, instala essa porra caralho :D");
                app = launchnavigator.APP.USER_SELECT;
            }
            launchnavigator.navigate([latitude, longitude], {
                app: app
            });
        });
    });
});