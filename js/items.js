const rows = [
    "base-row",
    "study-row"
];

let index = 0;
let prevIndex = rows.length

function nextIndex() {
    prevIndex = index
    if (index == rows.length-1) {
        index = 0;
        return index;
    }
    index++;

    return index;
}

function lastIndex() {
    prevIndex = index
    if (index == 0) {
        index = rows.length-1;
        return index;
    }
    index--;
    return index;
}

document.onkeydown = e => {
    if (document.activeElement.nodeName === 'INPUT') {
        return;
    }

    if (e.key === 'ArrowUp') {
        document.getElementById(rows[index]).classList.remove('active-row');
        document.getElementById(rows[nextIndex()]).classList.add('active-row');

    } else if (e.key === 'ArrowDown') {
        document.getElementById(rows[index]).classList.remove('active-row');
        document.getElementById(rows[lastIndex()]).classList.add('active-row');
    }

    const foodbox = document.getElementById('food-box');

    if (rows[index] === 'study-row') foodbox.classList.remove('hidden');
    else foodbox.classList.add('hidden');

    let code = parseInt(e.key);

    if (code !== NaN && 
        code >= 1 && 
        code <= 6 &&
        !e.ctrlKey
        ) {

            let items = document.querySelectorAll('.active-row > a');
            items[code-1].click();

    } 
    
}