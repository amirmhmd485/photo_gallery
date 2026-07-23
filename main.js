// code
const images = document.querySelector(".images");
const input = document.querySelector("input");
const btn  = document.querySelector("button");

async function getApi(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
btn.addEventListener("click" , function(e){
    images.innerHTML = "";
    getApi("images.json").then((data) => {
        if(input.value != ""){
            for(let i = 0 ; i < +input.value ; i++){
                let img = document.createElement("img");
                img.src = data[Math.floor(Math.random() * data.length)].src;
                img.setAttribute("loading" , "lazy");
                images.appendChild(img);
            }
            images.style.padding = "5px";
        }
        else{
            e.preventDefault();
        }
    })
});

