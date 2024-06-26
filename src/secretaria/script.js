
import { walk } from '../util/walk.js';

window.electronAPI.setConfig("playerRoom", 'sala-1');
let walls = [
    [
        [810, 620], [850, -1]
    ],
    [
        [-1, 620], [30, -1]
    ],
    [
        [-1, 180], [360, -1]
    ],
    [
        [450, 270], [690, -1]
    ],
    [
        [210, 270], [460, 210]
    ],
    [
        [60, 610], [300, 360]
    ]

];

const doors = [
    {
        position: [[300, 600], [510, 600],],
        destination: "saida",
        needTag: false,
        dialog: ""

    }

];

window.electronAPI.setConfig("dialog", { isOnDialog: false });
window.electronAPI.setConfig("enemyName", null);

let playerPosition = [750, 270];

let rotation = 0;
const _body = document.getElementsByTagName("body")[0];


walk(document, walls, doors, playerPosition, rotation);

document.addEventListener("DOMContentLoaded", (e) => {
    if (window.electronAPI.getConfig("win").win) {
        switch (window.electronAPI.getConfig("win").enemyName) {

        }
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key == "e") {
        //interact(playerPosition, [   ]);
    }

});
