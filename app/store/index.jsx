import { proxy } from "valtio";

import * as THREE from "three"
// Chairs


const state = proxy({
    tabOpen : false,
    sideTapOpen : false,
    current : "Chair1",
    currentColor : "#fff",
    currentTexture : "default",

    // slider values
    width : 1,
    height : 1,
    thickness : 1,

    //materials
    mat1 : null
});


export default state;