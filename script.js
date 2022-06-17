hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

native.reverse();

rainbow = native.concat(hero, destination);
rainbow.unshift(`Richard`);
rainbow.push(`Vain`);
rainbow[3] = `Gave`;
rainbow[4] = `Battle`;

rainbowColor = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `violet`];

document.write(`<div class="mainBlock">`);

for(i = 0; i < rainbow.length; i++) {
    document.write(`<div class="someDiv">
        <div class="circle" style="background-color: ${rainbowColor[i]}"></div>
        ${rainbow[i]}</div>`)
}

document.write(`</div>`);