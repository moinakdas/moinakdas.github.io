$(document).ready(function(){
    var menuShowing = false;
    $('body').on('click','#menuButton',function(){
        if(!menuShowing){ //if menu isnt showing, show menu
            //$("#mobileMenu").css("content","url(images/menuIconWhite.png)");
            $("body").css("overflow-y","hidden");
            $("#blurFilter").css("display","block");
            $("#mobileMenu").animate({width: "60%"},{duration: 200, easing: "swing"});
            $({blurRadius: 0}).animate({blurRadius: 15},{
                duration: 200,
                easing: 'swing',
                step: function(){
                    $("#blurFilter").css({"backdrop-filter": "blur(" + this.blurRadius + "px)"});
                }
            });

            menuShowing = true;
        }else{ //if menu is showing, hide menu
            //$("#mobileMenu").css("content","url(images/menuIconBlue.png)");
            $("#mobileMenu").animate({width: "0%"},{duration: 200, easing: "swing"});
            $({blurRadius: 15}).animate({blurRadius: 0},{
                duration: 200,
                easing: 'swing',
                step: function(){
                    $("#blurFilter").css({"backdrop-filter": "blur(" + this.blurRadius + "px)"});
                }
            });
            setTimeout(() => {
                $("#blurFilter").css("display","none");
            }, 200)
            $("body").css("overflow-y","visible");
            menuShowing = false;
        }
    });
});