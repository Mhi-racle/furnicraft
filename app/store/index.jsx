import { proxy } from "valtio";
// Chairs

const state = proxy({
    tabOpen : true,
    current : "Chair1",


    // slider values
    width : 1,
    height : 1,
    thickness : 1
});


export default state;