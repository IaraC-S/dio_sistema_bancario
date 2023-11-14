// MOLDE CARDNEWS HERDA TODOS OS COMPORTAMENTOS DE UM ELEMENTO HTML
class CardNews extends HTMLElement {
    constructor(){ //metodo construtor da classe
        super(); //construtor do htmlelement de quem esta herdando

        const shadow = this.attachShadow({mode: "open"}); //vai criar uma sombra
       
       shadow.appendChild(this.build());
       shadow.appendChild(this.styles());


    }
     build(){

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor= document.createElement("span");
        autor.textContent = this.getAttribute("autor");

        const title= document.createElement("h1");
        title.textContent = this.getAttribute("title");

        const text= document.createElement("p");
        text.textContent = this.getAttribute("text");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(title);
        cardLeft.appendChild(text);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const imagem= document.createElement("img");
        cardRight.appendChild(imagem);
        imagem.src = "/assets/darth.jpeg"

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);



        return componentRoot;
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
        .card{
            width: 80%;
            box-shadow: 9px 9px 27px 0px gray;
            display: flex;
            flex-direction: row;
            justify-content: space-between
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > h1{
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card__left > p{
           color: gray;
        }
        
        .card__left > span{
            font-weight: 400;
         }
        `;
        return style;
    }
}

customElements.define("card-news" , CardNews);