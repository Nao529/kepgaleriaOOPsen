import Kepek from "./Kepek.js";
import LeptetoKezelo from './LeptetesKezelo.js';
import { OBJLISTA } from "./adatok.js";

let szuloElem = document.getElementsByClassName("galeria")[0]
const KEPEK = new Kepek(OBJLISTA, szuloElem);

/* jobbra gombra kattintva léptessük a képeket */
/*
1. meg kell ogni a jobb gombot
2. kell egy eseménykezelő
2,5
3. indexet kell növelni - OBJLISTA-nak hányadik eleménél tartok

*/

let nkep = document.getElementsByClassName("kiemelt")[0]
new LeptetoKezelo(OBJLISTA,nkep)

