/* hozd létre a kép osztályt
adattagok:
kep, cim, szuloElem

tagfüggvények

megjelenit
*/
export default class Kep {
    #kep;
    #cim;
    constructor(kep, cim, szuloElem) {
        this.#kep=kep;
        this.#cim=cim;
        
        this.szuloElem=szuloElem;
        this.megjelenit()
    }
    megjelenit(){
        let html=`
                <div class="kep">
                    <img src="${this.#kep}" alt="${this.#cim}">
                    <h3>${this.#cim}</h3>
                </div>
    `
    this.szuloElem.innerHTML=html
    }
}
