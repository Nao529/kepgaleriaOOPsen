export class Kepek {
    #lista
    constructor(lista, szuloElem) {
        this.#lista=lista;
        this.szuloElem=szuloElem;
        this.megjelenit()
    }
    megjelenit(){
        for (let index = 0; index < this.#lista.length; index++) {
            const GALERIAKEP = new Kep(this.#lista[0].kep,this.#lista[0].cim, this.szuloElem);
        }
    }
}
