var audio = function() {
   audio = document.getElementById("myAudio");
};
window.onload = audio;

var $loadingMessage = $('#loadingH1');
    
   setTimeout(function() {
         clearInterval(loading);
         $loadingMessage.hide();
      }, 1500);
   
   var initProgram = setTimeout(function(){
       var greeting = "--- GATHERING RESUME INFO ---";
       var message = "RUNNING  RESUME PROTOCAL (CRP) FOR ROMAN VARGAS";
       var $identityDiv = $("#identity-results");
       var $name = "NAME: ROMAN VARGAS";
       var $alias = "KNOWN ALIAS: @ROMVARGAS81"
       var $occupation  = "OCCUPATION: FULL-STACK DEVELOPER / DEVOPS";
       var $frontEnd  = "FRONT END DEVELOPMENT CORE: HTML5 | CSS3 | JAVASCRIPT ";
         var $JSFrameworks = "JAVASCRIPT FRAMEWORKS: ANGULAR";
         var $JSLibs = "JAVASCRIPT LIBRARIES: JQUERY | REACT";
         var $CSSFrameworks = "CSS FRAMEWORKS: BOOTSTRAP | TAILWIND";
         var $CSSPre = "CSS PREPROCESSORS: SASS | LESS ";
         var $frontEndAnimation = "FRONT END ANIMATION: CANVAS | HTML5 | SVG | THREEjs";
       var $backEnd = "BACK-END DEVELOPMENT CORE: JAVA | PYTHON | NODEjs";
         var $java = "JAVA FRAMEWORKS: SPRING BOOT | SPRING WEB | SPRING DATA | SPRING SECURITY -- CREASY!!";
         var $python= "PYTHON FRAMEWORKS: FLASK | DJANGO | SQLALCHEMY";
         var $node = "NODEjs FRAMEWORK: EXPRESS | GRAPHQL";
         var $databases = "DATABASES: MySQL | POSTGRESQL | ORACLE | MONGODB | DYNAMODB";
       var $devOps = "DEVOPS TOOLS: DOCKER | KUBERNETES | AWS";
         var $automation = "AUTOMATION TOOLS: JENKINS | GITHUB-ACTIONS";
         var $containers = "CONTAINERS: DOCKER | KUBERNETES | EKS";
         var $cloud = "CLOUD PROVIDER: AWS | GCP";
         var $iac = "INFRASTRUCTURE AS CODE: TERRAFORM";
       
         
      function initIdentityResults(i){
         audio.play();
          $("#message").addClass("sign cursor").text(message.substring(0, i));
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, 6);   
            }else{
               $('#message').removeClass("cursor");
               var loadingResume = function(){
                     $("#loadingMessage2").show()
                     var dotAlpha = document.getElementById("alpha-loading");
                     var loadingAlpha = setInterval(function() {
                      if(dotAlpha.innerHTML.length == 6) {
                          dotAlpha.innerHTML = "";
                      } else {
                          dotAlpha.innerHTML += ".";
                          setTimeout(function() {
                              clearInterval(loadingAlpha);
                              $("#loadingMessage2").hide();
                           }, 2000);
                      }
                  }, 50);  // Dot Speed
               }
               loadingResume();
               function initName(i){
                  $("#name").addClass("sign cursor").text($name.substring(0, i));
                     if(i < $name.length){
                        setTimeout(function(){
                           initName(i + 1);   
                        }, 
                        6);
                     }else{
                        $("#name").removeClass("cursor");
                        setTimeout(function() {
                           initAlias(0);
                        }, 100);      
                     }
               }
               setTimeout(function() {
                  initName(0);
               }, 250);
            }
            function initAlias(i){
                  $("#alias").addClass("sign cursor").text($alias.substring(0, i));
                     if(i < $alias.length){
                        setTimeout(function(){
                           initAlias(i + 1);   
                        }, 6);
                     }else{
                        $("#alias").removeClass("cursor");
                        setTimeout(function() {
                           initOccupation(0);
                        }, 100);
                     }
            }
            function initOccupation(i){
               $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                     if(i < $occupation.length){
                        setTimeout(function(){
                           initOccupation(i + 1);   
                        }, 6);
                     }else{
                        $("#occupation").removeClass("cursor");
                        setTimeout(function() {
                           initFrontEnd(0);
                        }, 100);
                     }
            }
            function initFrontEnd(i){
               $('#front-end-span').addClass('sign cursor');
               $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
                  if(i < $frontEnd.length){
                     setTimeout(function(){
                        initFrontEnd(i + 1);  
                     }, 6);
                  }else{
                     $('#front-end').removeClass("cursor");
                        setTimeout(function() {
                           initJSFrameworks(0);
                        }, 100);
                  }
            }
            function initJSFrameworks(i){
               $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
                  if(i < $JSFrameworks.length){
                     setTimeout(function(){
                         initJSFrameworks(i + 1);  
                     }, 6);
                  }else{
                     $('#js-frameworks').removeClass("cursor");
                        setTimeout(function() {
                           initJSLibs(0);
                        }, 100);
                  }
            }
            function initJSLibs(i){
               $('#js-libs').addClass("sign cursor").text($JSLibs.substring(0, i));
                  if(i < $JSLibs.length){
                     setTimeout(function(){
                         initJSLibs(i + 1);  
                     }, 6);
                  }else{
                     $('#js-libs').removeClass("cursor");
                        setTimeout(function() {
                           initCSSFrameworks(0);
                        }, 100);
                  }
            }
            function initCSSFrameworks(i){
               $('#css-frameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
                  if(i < $CSSFrameworks.length){
                     setTimeout(function(){
                         initCSSFrameworks(i + 1);  
                     }, 6);
                  }else{
                     $('#css-frameworks').removeClass("cursor");
                     setTimeout(function() {
                           initCSSPre(0);
                        }, 100);
                  }
            }
             function initCSSPre(i){
               $('#css-pre').addClass("sign cursor").text($CSSPre.substring(0, i));
                  if(i < $CSSPre.length){
                     setTimeout(function(){
                         initCSSPre(i + 1);  
                     }, 6);
                  }else{
                     $('#css-pre').removeClass("cursor");
                     setTimeout(function() {
                           initFrontEndAnimation(0);
                        }, 100);
                  }
            }
            function initFrontEndAnimation(i){
               $('#front-end-animation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
                  if(i < $frontEndAnimation.length){
                     setTimeout(function(){
                         initFrontEndAnimation(i + 1);  
                     }, 6);
                  }else{
                     $('#front-end-animation').removeClass("cursor");
                     setTimeout(function() {
                           initBackend(0);
                        }, 100);
                  }
            }
            function initBackend(i){
               $('#back-span').addClass("sign cursor")
               $('#back-development').addClass("cursor").text($backEnd.substring(0, i));
                  if(i < $backEnd.length){
                     setTimeout(function(){
                         initBackend(i + 1);  
                     }, 6);
                  }else{
                     $('#CMS-development').removeClass("cursor");
                     setTimeout(function() {
                           initJava(0);
                        }, 100);
                  }
            }
            function initJava(i){
               $('#java').addClass('sign cursor').text($java.substring(0, i));
                  if(i < $java.length){
                     setTimeout(function() {
                        initJava(i + 1);
                     }, 6);
                  } else {
                     $('#java').removeClass("cursor");
                     setTimeout(function() {
                           initPython(0);
                        }, 100);
                  }
            }
            function initPython(i){
               $('#python').addClass('sign cursor').text($python.substring(0, i));
                  if(i < $python.length){
                     setTimeout(function() {
                        initPython(i + 1);
                     }, 6);
                  } else {
                     $('#python').removeClass("cursor");
                     setTimeout(function() {
                           initNode(0);
                        }, 100);
                  }
            }
            function initNode(i){
               $('#node').addClass('sign cursor').text($node.substring(0, i));
                  if(i < $node.length){
                     setTimeout(function() {
                        initNode(i + 1);
                     }, 6);
                  } else {
                     $('#node').removeClass("cursor");
                     setTimeout(function() {
                           initDatabases(0);
                        }, 100);
                  }
            }
            function initDatabases(i){
               $('#databases').addClass('sign cursor').text($databases.substring(0, i));
                  if(i < $databases.length){
                     setTimeout(function() {
                        initDatabases(i + 1);
                     }, 6);
                  } else {
                     $('#databases').removeClass("cursor");
                     setTimeout(function() {
                           initDevops(0);
                        }, 100);
                  }
            }
             function initDevops(i){
               $('#devops-span').addClass('fa fa-paint-brush');
               $('#devops').addClass("cursor").text($devOps.substring(0, i));
                  if(i < $devOps.length){
                     setTimeout(function(){
                         initDevops(i + 1);  
                     }, 6);
                  }else{
                     $('#devops').removeClass("cursor");
                     setTimeout(function() {
                        initAutomation(0);
                        }, 100);
                  }
            }
             function initAutomation(i){
               $('#automation').addClass('sign cursor').text($automation.substring(0 , 1));
               if(i < $automation.length) {
                  setTimeout(function(){
                  initAutomation(i + 1);
                  }, 6);
               } else {
                  $('automation').removeClass('cursor');
                  setTimeout(function(){
                     initCloud(0);
                  },100);
               }
             }
             function initCloud(i){
               $('#cloud').addClass('sign cursor').text($cloud.substring(0,1));
               if(i < $cloud.length) {
                  setTimeout(function(){
                     initCloud(i + 1);
                  },6);
               } else {
                  $('cloud').removeClass('cursor');
                  setTimeout(function(){
                     initIac(0);
                  },100);
               }
             }
             function initIac(i){
               $('#iac').addClass('sign cursor').text($iac.substring(0,1));
               if(i < $iac.length) {
                  setTimeout(function(){
                     initIac(i + 1);
                  },6);
               }else {
                  $('#iac').removeClass('cursor');
                  setTimeout(function(){
                     initContainers(0);
                  },100)
               }
             }
            function initContainers(i){
               $('#containers').addClass("sign cursor").text($containers.substring(0, i));
                  if(i < $containers.length){
                     setTimeout(function(){
                         initDesignAnimation(i + 1);  
                     }, 6);
                  }else{
                     $('#design-animation').removeClass("cursor");
                  }
            }
         }
         
      function initProgramAlpha(i){
          $("#greeting").addClass("cursor").text(greeting.substring(0, i));
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, 6);   
            }else{
               $("#greeting").removeClass("cursor");
               initIdentityResults(0);
            }
         }
         initProgramAlpha(0)
   
   }, 100);


