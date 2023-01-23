$(document).ready(function(){
    let isOn = false;
    let offset1 = 110 + 0.5 * document.getElementById('startStop').clientHeight;
    let screenOn = false;
    if(!isOn){
        document.getElementById('startStop').classList.add('startPulse');
        document.getElementById('startStopM1').classList.add('startPulse');
    }
    
    window.onresize = responsiveDisp;
    if(window.innerWidth <= 850){
        cellResponse();
    }else{
        computerResponse();
    }
        
    //reactions
    $("#startStop3").hover(function(){
        if(!isOn){
            document.getElementById('startStop2').classList.add('turnOnMec2');
            setTimeout(function(){ 
                $("#startStop2").css("opacity","1");
                document.getElementById('startStop2').classList.remove('turnOnMec2');
            }, 150);
            
        }
    },function(){
        if(!isOn){
            document.getElementById('startStop2').classList.add('turnOnMec2rev');
            setTimeout(function(){ 
                $("#startStop2").css("opacity","0");
                document.getElementById('startStop2').classList.remove('turnOnMec2rev');
            }, 150);
        }
    });
    //pc
    document.getElementById("startStop3").onclick = function(){
        isOn = true;
        document.getElementById('icon1On').classList.add('blinkLights');
        document.getElementById('icon2On').classList.add('blinkLights');
        document.getElementById('icon3On').classList.add('blinkLights');
        document.getElementById('icon4On').classList.add('blinkLights');
        document.getElementById('icon5On').classList.add('blinkLights');
        document.getElementById('startStop3').classList.add('turnOnMec');
        

        setTimeout(function(){ 
            $("#startStop3").css("opacity","1");
        }, 250);
        setTimeout(function(){ 
            document.getElementById('mechEon').classList.add('turnOnMec');
            $("#mechEon").css("opacity", "1");
        }, 450);
        document.getElementById('startStop').classList.remove('startPulse');
        setTimeout(function(){ 
            $("#icon1On").css("opacity","1");
            $("#icon2On").css("opacity","1");
            $("#icon3On").css("opacity","1");
            $("#icon4On").css("opacity","1");
            $("#icon5On").css("opacity","1");
        }, 2000);
    }

    //mobile 
    document.getElementById("startStopM3").onclick = function(){
        isOn = true;
        document.getElementById('icon1OnM').classList.add('blinkLights');
        document.getElementById('icon2OnM').classList.add('blinkLights');
        document.getElementById('icon3OnM').classList.add('blinkLights');
        document.getElementById('icon4OnM').classList.add('blinkLights');
        document.getElementById('icon5OnM').classList.add('blinkLights');
        document.getElementById('startStopM3').classList.add('turnOnMec');
        document.getElementById('startStopM1').classList.remove('startPulse');
        document.getElementById('speedNeedle').classList.add('needleTater');
            setTimeout(function(){ 
                $("#startStopM3").css("opacity","1");
            }, 250);
            setTimeout(function(){ 
                document.getElementById('mobileMecOn').classList.add('turnOnMec');
                $("#mobileMecOn").css("opacity", "1");
            }, 600);
            setTimeout(function(){ 
                $("#icon1OnM").css("opacity","1");
                $("#icon2OnM").css("opacity","1");
                $("#icon3OnM").css("opacity","1");
                $("#icon4OnM").css("opacity","1");
                $("#icon5OnM").css("opacity","1");
            }, 2000);
        document.getElementById('startStop').classList.remove('startPulse');
    }

    screenTime();

    // get the element to animate
    var element = document.getElementById('arduinoScreen');
    var elementHeight = element.clientHeight;

    // listen for scroll event and call animate function
    document.addEventListener('scroll', animate);

    // check if element is in view
    function inView() {
        // get window height
        var windowHeight = window.innerHeight;
        // get number of pixels that the document is scrolled
        var scrollY = window.scrollY || window.pageYOffset;
        // get current scroll position (distance from the top of the page to the bottom of the current viewport)
        var scrollPosition = scrollY + windowHeight;
        // get element position (distance from the top of the page to the bottom of the element)
        var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
        // is scroll position greater than element position? (is element in view?)
        if (scrollPosition > elementPosition) {
            return true;
        }
        return false;
    }

    var hasNotHappened = true;
    // animate element when it is in view
    function animate() {
        // is element in view?
        if (inView()) {
            // element is in view, add class to element
            document.getElementById('progressBar').classList.add('animate1');
            document.getElementById('loadBorder').classList.add('animate2');
            document.getElementById('loadScene').classList.add('animate2');
            document.getElementById('arduinoScreen').classList.add('animate0');
            document.getElementById('forward').classList.add('animate3');
            document.getElementById('backward').classList.add('animate3');
            setTimeout(function(){ 
                if(hasNotHappened){
                    $("#skillsTab").css("visibility","visible");
                    trigger();
                    screenOn = true;
                }
            }, 4100);  
        }
    }

    function screenTime(){
        var currentoffset = 0;
        $("#forward").click(function(){
            if(screenOn && currentoffset > -140){
                currentoffset = currentoffset - 14.15;
                offsetStr = String(currentoffset)  + "vw";
                $("#skillsTab").css("left",offsetStr);
                trigger();
            }
        });
        $("#backward").click(function(){
            if(screenOn && currentoffset < -1){
                currentoffset = currentoffset + 14.15;
                offsetStr = String(currentoffset)  + "vw";
                $("#skillsTab").css("left",offsetStr);
                trigger();
            }
        });
    }
    
    function trigger(){
        attachAll();
        setTimeout(function(){ 
                removeAll();
        }, 1000);  
    }

    function attachAll(){
        document.getElementById('circle1').classList.add('circle1Anim');
        document.getElementById('circle2').classList.add('circle2Anim');
        document.getElementById('circle3').classList.add('circle3Anim');
        document.getElementById('circle4').classList.add('circle4Anim');
        document.getElementById('circle5').classList.add('circle5Anim');
        document.getElementById('circle6').classList.add('circle6Anim');
        document.getElementById('circle7').classList.add('circle7Anim');
        document.getElementById('circle8').classList.add('circle8Anim');
        document.getElementById('circle9').classList.add('circle9Anim');
        document.getElementById('circle10').classList.add('circle10Anim');
        document.getElementById('circle11').classList.add('circle11Anim');
        document.getElementById('circle12').classList.add('circle12Anim');
        document.getElementById('circle14').classList.add('circle14Anim');
    }

    function removeAll(){
        document.getElementById('circle1').classList.remove('circle1Anim');
        document.getElementById('circle2').classList.remove('circle2Anim');
        document.getElementById('circle3').classList.remove('circle3Anim');
        document.getElementById('circle4').classList.remove('circle4Anim');
        document.getElementById('circle5').classList.remove('circle5Anim');
        document.getElementById('circle6').classList.remove('circle6Anim');
        document.getElementById('circle7').classList.remove('circle7Anim');
        document.getElementById('circle8').classList.remove('circle8Anim');
        document.getElementById('circle9').classList.remove('circle9Anim');
        document.getElementById('circle10').classList.remove('circle10Anim');
        document.getElementById('circle11').classList.remove('circle11Anim');
        document.getElementById('circle12').classList.remove('circle12Anim');
        document.getElementById('circle14').classList.remove('circle14Anim');
    }

    //when screen size changes, change attributes from pc to mobile
    function responsiveDisp(){
        if (window.innerWidth <= 850) {
            cellResponse();
        }else{
            computerResponse();
        }
    }

    function computerResponse(){
        $("#aboveFold").css("display","block");
        $("#mobile").css("display","none");
    }

    function cellResponse(){
        $("#aboveFold").css("display","none");
        $("#mobile").css("display","block");

    }

    // Doing all the fade in stuff
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#aboutMe")[0].classList.add("fadeInBottom");
                setTimeout(function(){ 
                    $("#aboutMe").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer1.observe(document.querySelector("#marker2"));

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#gradPic")[0].classList.add("fadeInRight");
                setTimeout(function(){ 
                    $("#gradPic").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer2.observe(document.querySelector("#marker2"));

    // pictures and stuff
    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#mechanical")[0].classList.add("fadeInBottom");
            }
        })
    })
    observer3.observe(document.querySelector("#marker"));

    const observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                setTimeout(function(){ 
                    document.querySelectorAll("#electrical")[0].classList.add("fadeInBottom");
                    setTimeout(function(){ 
                        $("#electrical").css("opacity","1");
                    }, 1200);
                }, 500); 
                
            }
        })
    })
    observer4.observe(document.querySelector("#marker"));

    const observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                setTimeout(function(){ 
                    document.querySelectorAll("#software")[0].classList.add("fadeInBottom");
                    setTimeout(function(){ 
                        $("#software").css("opacity","1");
                    }, 1200);
                }, 1000);
                
            }
        })
    })
    observer5.observe(document.querySelector("#marker"));

    const observer6 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry1")[0].classList.add("fadeInBottom");
                setTimeout(function(){
                    $("#jobEntry1").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer6.observe(document.querySelector("#jobEntry1"));

    const observer7 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry2")[0].classList.add("fadeInBottom");
                setTimeout(function(){
                    $("#jobEntry2").css("opacity","1");
                }, 1200);    
            }
        })
    })
    observer7.observe(document.querySelector("#jobEntry2"));

    const observer8 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry3")[0].classList.add("fadeInBottom");
                setTimeout(function(){
                    $("#jobEntry3").css("opacity","1");
                }, 1200);    
            }
        })
    })
    observer8.observe(document.querySelector("#jobEntry3"));

    const observer9 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry4")[0].classList.add("fadeInBottom");    
                setTimeout(function(){
                    $("#jobEntry4").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer9.observe(document.querySelector("#jobEntry4"));

    const observer10 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry5")[0].classList.add("fadeInBottom");    
                setTimeout(function(){
                    $("#jobEntry5").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer10.observe(document.querySelector("#jobEntry5"));

    const observer11 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry6")[0].classList.add("fadeInBottom");    
                setTimeout(function(){
                    $("#jobEntry6").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer11.observe(document.querySelector("#jobEntry6"));

    const observer12 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry7")[0].classList.add("fadeInBottom");    
                setTimeout(function(){
                    $("#jobEntry7").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer12.observe(document.querySelector("#jobEntry7"));

    const observer14 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry8")[0].classList.add("fadeInBottom");  
                setTimeout(function(){
                    $("#jobEntry8").css("opacity","1");
                }, 1200);  
            }
        })
    })
    observer14.observe(document.querySelector("#jobEntry8"));

    //do the same thing but on mobile
    const observer15 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#pfp001")[0].classList.add("fadeInRight");  
                
            }
        })
    })
    observer15.observe(document.querySelector("#pfp001"));

    const observer16 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#aboutMeMobile")[0].classList.add("fadeInBottom");  
                
            }
        })
    })
    observer16.observe(document.querySelector("#aboutMeMobile"));

    const observer17 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#MME")[0].classList.add("fadeInBottom");  
                
            }
        })
    })
    observer17.observe(document.querySelector("#MME"));

    const observer18 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#MEE")[0].classList.add("fadeInBottom");  
                
            }
        })
    })
    observer18.observe(document.querySelector("#MEE"));

    const observer19 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#MCS")[0].classList.add("fadeInBottom");  
                
            }
        })
    })
    observer19.observe(document.querySelector("#MCS"));

    const observer20 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry1M")[0].classList.add("fadeInBottom");
                setTimeout(function(){
                    $("#jobEntry1").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer20.observe(document.querySelector("#jobEntry1M"));

    const observer21 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry2M")[0].classList.add("fadeInBottom");
                setTimeout(function(){
                    $("#jobEntry2M").css("opacity","1");
                }, 1200);    
            }
        })
    })
    observer21.observe(document.querySelector("#jobEntry2M"));

    const observer22 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry3M")[0].classList.add("fadeInBottom");
                setTimeout(function(){
                    $("#jobEntry3M").css("opacity","1");
                }, 1200);    
            }
        })
    })
    observer22.observe(document.querySelector("#jobEntry3M"));

    const observer23 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry4M")[0].classList.add("fadeInBottom");    
                setTimeout(function(){
                    $("#jobEntry4M").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer23.observe(document.querySelector("#jobEntry4M"));

    const observer24 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry5M")[0].classList.add("fadeInBottom");    
                setTimeout(function(){
                    $("#jobEntry5M").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer24.observe(document.querySelector("#jobEntry5M"));

    const observer25 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry6M")[0].classList.add("fadeInBottom");    
                setTimeout(function(){
                    $("#jobEntry6M").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer25.observe(document.querySelector("#jobEntry6M"));

    const observer26 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry7M")[0].classList.add("fadeInBottom");    
                setTimeout(function(){
                    $("#jobEntry7M").css("opacity","1");
                }, 1200);
            }
        })
    })
    observer26.observe(document.querySelector("#jobEntry7M"));

    const observer27 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelectorAll("#jobEntry8M")[0].classList.add("fadeInBottom");  
                setTimeout(function(){
                    $("#jobEntry8M").css("opacity","1");
                }, 1200);  
            }
        })
    })
    observer27.observe(document.querySelector("#jobEntry8M"));


});