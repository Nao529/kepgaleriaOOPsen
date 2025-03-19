export default class Kep{
    #cim
    #src
    #leiras
    #index
    constructor(index, cim, src,leiras, szuloElem ){
        this.#index=index;
        this.#cim=cim;
        this.#src = src;
        this.#leiras=leiras;
        this.szuloElem=szuloElem;
        this.megjelenit();
        this.esemenykezelo();
    }
    esemenykezelo(){
        /* megfogjuk az adott objektumhoz tartozó kép elemet
        ráteszünk egy kattintás eseményt */
        this.kepElem=document.querySelector(".kep:last-child");
        this.kepElem.addEventListener("click", ()=>{ /* function névtelen fg esetén, pl egy esemény kezelőben, a this arra az elemre mutat amelyik az ereményt kiváltotta, azaz olyasmi mint az event target, nyíl fg esetén (()=>) a this arra az objektumra mutat, amelyiknek a hatókörében a nyíl fg szerepel */
            console.log(this.#index)
            /* a kiskép átadja azt az információt magáról, hogy ő hányadik a sorban
            megmondja, hogy ő kicsoda */
            /* saját eseményt hozunk létre */
            const e = new CustomEvent("kivalaszt",{detail:this.#index})
            window.dispatchEvent(e);
        })
    }
    megjelenit(){
        let html = `<div class="kep">
                        <img src="${this.#src}" alt="">
                    </div>`
        this.szuloElem.insertAdjacentHTML("beforeend",html);/* html dom objektmot hozz létre */
    }
}
