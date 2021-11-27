$(document).ready(function(){
    $("#bu1").hover(function(){ //on hover
        $("#bu1").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
        $({blurRadius: 1}).animate({blurRadius: 0},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p1").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 0}).animate({blurRadius: 90},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p1").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    },function(){
        $("#bu1").animate({color: "#f6f8fd",backgroundColor: "#15161b"},{duration: 200, easing: "linear"});
        $({blurRadius: 0}).animate({blurRadius: 1},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p1").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 90}).animate({blurRadius: 0},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p1").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    });
    $("#bu2").hover(function(){ //on hover
        $("#bu2").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
        $({blurRadius: 1}).animate({blurRadius: 0},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p2").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 0}).animate({blurRadius: 90},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p2").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    },function(){
        $("#bu2").animate({color: "#f6f8fd",backgroundColor: "#15161b"},{duration: 200, easing: "linear"});
        $({blurRadius: 0}).animate({blurRadius: 1},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p2").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 90}).animate({blurRadius: 0},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p2").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    });
    $("#bu3").hover(function(){ //on hover
        $("#bu3").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
        $({blurRadius: 1}).animate({blurRadius: 0},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p3").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 0}).animate({blurRadius: 90},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p3").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    },function(){
        $("#bu3").animate({color: "#f6f8fd",backgroundColor: "#15161b"},{duration: 200, easing: "linear"});
        $({blurRadius: 0}).animate({blurRadius: 1},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p3").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 90}).animate({blurRadius: 0},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p3").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    });
    $("#bu4").hover(function(){ //on hover
        $("#bu4").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
        $({blurRadius: 1}).animate({blurRadius: 0},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p4").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 0}).animate({blurRadius: 90},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p4").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    },function(){
        $("#bu4").animate({color: "#f6f8fd",backgroundColor: "#15161b"},{duration: 200, easing: "linear"});
        $({blurRadius: 0}).animate({blurRadius: 1},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p4").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 90}).animate({blurRadius: 0},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p4").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    });
    $("#bu5").hover(function(){ //on hover
        $("#bu5").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
        $({blurRadius: 1}).animate({blurRadius: 0},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p5").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 0}).animate({blurRadius: 90},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p5").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    },function(){
        $("#bu5").animate({color: "#f6f8fd",backgroundColor: "#15161b"},{duration: 200, easing: "linear"});
        $({blurRadius: 0}).animate({blurRadius: 1},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p5").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 90}).animate({blurRadius: 0},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p5").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    });
    $("#bu6").hover(function(){ //on hover
        $("#bu6").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
        $({blurRadius: 1}).animate({blurRadius: 0},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p6").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 0}).animate({blurRadius: 90},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p6").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    },function(){
        $("#bu6").animate({color: "#f6f8fd",backgroundColor: "#15161b"},{duration: 200, easing: "linear"});
        $({blurRadius: 0}).animate({blurRadius: 1},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p6").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 90}).animate({blurRadius: 0},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p6").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    });
    $("#bu7").hover(function(){ //on hover
        $("#bu7").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
        $({blurRadius: 1}).animate({blurRadius: 0},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p7").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 0}).animate({blurRadius: 90},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p7").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    },function(){
        $("#bu7").animate({color: "#f6f8fd",backgroundColor: "#15161b"},{duration: 200, easing: "linear"});
        $({blurRadius: 0}).animate({blurRadius: 1},{
            duration: 200,
            easing: 'linear',
            step: function(){
                $("#p7").css({"filter": "brightness(" + this.blurRadius + ")"});
            }
        });
        $({blurRadius: 90}).animate({blurRadius: 0},{
            duration: 300,
            easing: 'swing',
            step: function(){
                $("#p7").css({"transform": "rotate(" + this.blurRadius + "deg)"});
            }
        });
    });
    $("#bu8").hover(function(){ //on hover
        $("#bu8").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
    },function(){
        $("#bu8").animate({color: "#f6f8fd",backgroundColor: "#4973ff"},{duration: 200, easing: "linear"});
    });
    $("#bu9").hover(function(){ //on hover
        $("#bu9").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
    },function(){
        $("#bu9").animate({color: "#f6f8fd",backgroundColor: "#4973ff"},{duration: 200, easing: "linear"});
    });
    $("#bu10").hover(function(){ //on hover
        $("#bu10").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
    },function(){
        $("#bu10").animate({color: "#f6f8fd",backgroundColor: "#4973ff"},{duration: 200, easing: "linear"});
    });
    $("#bu11").hover(function(){ //on hover
        $("#bu11").animate({color: "#15161b",backgroundColor: "#f6f8fd"},{duration: 200, easing: "linear"});
    },function(){
        $("#bu11").animate({color: "#f6f8fd",backgroundColor: "#4973ff"},{duration: 200, easing: "linear"});
    });
    
});