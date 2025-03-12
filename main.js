import { KEPEK } from "./adatok.js";
import Kep from "./Kep.js";
import { Kepek } from "./Kepek.js";

const GALERIAELEM=document.querySelectorAll(".galeria")[0]
const NAGYKEPELEM=document.querySelectorAll(".kiemelt")[0]

const NAGYKEP=new Kep(KEPEK[0].kep,KEPEK[0].cim, GALERIAELEM)

const GALERIAKEPEK=new Kepek(KEPEK,GALERIAELEM,NAGYKEPELEM)
