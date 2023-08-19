import { proxy } from "valtio";
// Chairs

const state = proxy({
    tabOpen : true,
    current : "Chair1"

});


export default state;