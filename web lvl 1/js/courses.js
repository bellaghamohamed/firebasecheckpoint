function bold(){
    var str=document.getElementById("text");
    if (str.style.fontWeight=="bold"){
        str.style.fontWeight="normal"}
        else{
            str.style.fontWeight="bold"
        }
    }

    
function italique(){
    var itl=document.getElementById("text");
    if (itl.style.fontStyle=="italic"){
        itl.style.fontstyle="normal"
    }
    else{itl.style.fontStyle="italic"}
}
function underline(){
    var unr=document.getElementById("text");
    if(unr.style.textDecoration=="underline"){
        unr.style.textDecoration="none"}
        else{
            unr.style.textDecoration="underline"
        }
    }
    function px(){
      document.getElementById("text").style.fontSize=document.getElementById("ps").value;
    }
    function ar(){
        document.getElementById("text").style.fontFamily=document.getElementById("tt").value;
    }
    $(".b button").css("opacity","0");
  
           $(".b").mouseenter(function(){
           $(this).css("opacity","0.5");
           $(this).find("button").css("opacity","1");
           }
           );
           $(".b").mouseleave(function(){
            $(".b").css("opacity","100");
            $(this).find("button").css("opacity","0");
           });
        
           var firebaseConfig = {
            apiKey: "AIzaSyDp6vOO_tjuaePqxM54NaFlp1jk0YG1Wlw",
            authDomain: "fir-checkpointgmc.firebaseapp.com",
            databaseURL: "https://fir-checkpointgmc.firebaseio.com",
            projectId: "fir-checkpointgmc",
            storageBucket: "",
            messagingSenderId: "440226037722",
            appId: "1:440226037722:web:3010b7acf7221f10154ae3"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          var messageRef=firebase.database().ref('contact')
function submitForm(){
    event.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById("number").value;
    var password=document.getElementById('password').value;
    saveMessage(name,email,number,password);
}
document.getElementById("contactForm").addEventListener('submit', submitForm);
function saveMessage(name,email,number,password){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        number: number,
        password:password

});
}
