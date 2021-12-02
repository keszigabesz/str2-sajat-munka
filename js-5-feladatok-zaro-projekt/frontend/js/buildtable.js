const createElement = (name, attributes) => {
    const element = document.createElement(name);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

const tableContainer = document.querySelector('#table__container');
let table;

const buildUpTableHead = tableHeadKeys => {
    tableContainer.innerHTML = ``;
    table = createElement('table', {
        id: 'main__table'
    });
    const thead = createElement('thead', {
        id: 'main__head'
    });
    const tr = createElement('tr', {
        class: 'main__tr'
    });
    for (const element of tableHeadKeys) {
        const th = createElement('th');
        th.innerText = element;
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    tableContainer.appendChild(table);
}

const buildUpTableBody = (costumerData, costumerDataKeys) => {
    const tbody = createElement('tbody', {
        id: 'main__tbody'
    })
    let checked = true;
    for (const row of costumerData) {
        const tr = createElement("tr", {
            id: `tr${row['id']}`,
            class: 'main__tr'
        });
        for (const key of costumerDataKeys) {
            const td = createElement("td");
            td.innerText = row[key];
            tr.appendChild(td);
        }
        const radio = createElement("input", {
            type: 'radio',
            id: row['id'],
            name: 'select'
        });
        if (checked) {
            radio.setAttribute("checked", true);
            checked = false;
        }
        const tdRadio = createElement("td");
        tdRadio.appendChild(radio);
        tr.appendChild(tdRadio);
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }

}

export {
    buildUpTableHead,
    buildUpTableBody,
}