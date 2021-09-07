async function parseFoods() {

    const response = await fetch('/foods.json');
    const data = await response.json();

    const lunches = data.MenusForDays[0].SetMenus;

    var lunchboxes = lunches.map(c => c.Components).map(c => {
        const lunch = document.createElement('ul');

        lunch.className = 'lunch-box'

        lunch.append(...c.map( line => {
            const el = document.createElement('li');
            el.innerText = line.split('(')[0];
            return el;
        }))

        return lunch;
    });


    lunchboxes.sort((a, b) => a.childenElementCount - b.childenElementCount);

    const leftLunches = lunchboxes.slice(lunchboxes.length/2, lunchboxes.length);
    const rightLunches = lunchboxes.slice(0, lunchboxes.length/2);

    lunchboxes = leftLunches.concat(rightLunches);
    console.log(lunchboxes)

    document.getElementById('food-box').append(...lunchboxes);

    

}

parseFoods();