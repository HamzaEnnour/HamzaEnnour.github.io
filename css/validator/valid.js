function notif(text,color)
{
    var x=document.getElementById("toast");
    x.classList.add("show");
    x.innerHTML=text;
    x.style.backgroundColor=color;
    setTimeout(function(){
        x.classList.remove("show");
    },3000);
}

$( document ).ready(function() {
    $(".errorr2").hide();
    $(".validd2").hide();
    $(".errorr1").hide();
    $(".validd1").hide();
    $(".errorr3").hide();
    $(".validd3").hide();
    var emailpattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var namepattern = /^[a-zA-Z]+(-[a-zA-Z]+)*$/;

    $("input#emailto").keyup(function () {
        if(!emailpattern.test($(this).val()))
        {
            $(this).css("border-color","red");
            $(".errorrr2").html("Please enter a valid email.").show();
            $(".errorr2").show();
            $(".validd2").hide();
        }
        else {
            $(this).css("border-color","#ff9800");
            $(".errorr2").hide();
            $(".errorrr2").hide();
            $(".validd2").show();
        }
    });
    $("input#name").keyup(function () {
        if(!$(this).val() || !namepattern.test($(this).val()))
        {
            $(this).css("border-color","red");
            $(".nm").html("Please enter a valid name.").show();
            $(".errorr1").show();
            $(".validd1").hide();
        }
        else {
            $(this).css("border-color","#ff9800");
            $(".errorr1").hide();
            $(".nm").hide();
            $(".validd1").show();
        }
    });
    $("textarea#message").keyup(function () {
        if(!$(this).val())
        {
            console.log("tt");
            $(this).css("border-color","red");
            $(".msg").html("Please enter a fulfilled message.").show();
            $(".errorr3").show();
            $(".validd3").hide();
        }
        else {
            $(this).css("border-color","#ff9800");
            $(".errorr3").hide();
            $(".msg").hide();
            $(".validd3").show();
        }
    });
    $("#sendmail").click(function() {
    if(emailpattern.test($("#emailto").val()) && namepattern.test($("#name").val()) && $("#message").val() && $("#name").val()  )
    {

        var name= $("#name").val();
        var mailto= $("#emailto").val();
        var message= $("#message").val();
        Email.send({
            Host:"smtp.gmail.com",
            //SecureToken : "B7DD90753A75FC4F662C9159CE6AC5F4574EE11C9FA01835C1B681479850DB890E057D10545FC9D9CD1F7C663844C36A",
            Username : "hamza.ennour.portfolio@gmail.com",
            Password : "0123azertyuiop",
            To : "hamza.ennour@esprit.tn",
            From : "hamza.ennour.portfolio@gmail.com",
            Subject : "Mail from "+name,
            Body : "<html><h2>Hey My Name : "+name+"</h2><strong>My Email "+mailto+"</strong><br></br><em>"+message+"</em></html>"
        }).then(
            message => notif("Mail envoyé avec succès.","green")
        );

    }
    else
        notif("Veuillez vérifier votre saisie.","red");
    });
});
