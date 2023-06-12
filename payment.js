//alert("Conform for payment");
if (confirm("conform payment")) {


} else {


}

function Insta() {
    document.getElementById("demo").style.backgroundColor = "red";
}


const taggle = document.getElementById("toggle-theme");
taggle.onchange = () => {

    if (taggle.checked) {


        document.querySelector('form').style.backgroundColor = '#000'
        document.querySelector('form').style.Color = '#FFF'

    } else {
        document.querySelector('form').style.backgroundColor = 'rgb(54, 53, 53)'
        document.querySelector('form').style.Color = '#000'


    }
}