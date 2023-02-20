const medicine = getQuerySelector('#medicine-name');
const quantity = getQuerySelector('#quantity');
const morning = getQuerySelector('#morning');
const noon = getQuerySelector('#noon');
const night = getQuerySelector('#night');
const allCheckBox= getQuerySelectorAll('input[type=checkbox]');
const ol = getQuerySelector('.OL');


const add = () =>{
    if(medicine.value === '') return alert('Please input medicine name');
    if(quantity.value ==='' || isNaN(quantity.value)) return alert('Quantity must be a number');
    if(allCheckBox[0].checked === false && allCheckBox[1].checked === false && allCheckBox[2].checked === false)return alert('Please check all checkboxes');

    const arr = [];

    allCheckBox.forEach(element => {
        if(element.checked) arr.push(1);
        else arr.push(0);
    });

    ol.innerHTML += `
    <li class="text-sm">
        <div class="grid grid-cols-5 mr-11 md:mr-48">
            <div class="col-span-2">${medicine.value}</div>
            <div class="">${quantity.value}mg</div>
            <div class="text-right">
                <span id="m" class="ml-2 md:ml-10 md:mr-3">${arr[0]}</span> +
                <span id="no" class="mx-0  md:mx-4">${arr[1]}</span> +
                <span id="ni" class="mr-1 md:mr-3 ml-0 md:ml-4">${arr[2]}</span>
            </div>
            <div class="text-right text-red-600 pr-4">
                <i class="bi bi-file-earmark-x-fill" class="ml-2"></i>
            </div>
        </div>
    </li>
    `
    const allList  = getQuerySelectorAll('.bi-file-earmark-x-fill');
    allList.forEach(element => {
        element.addEventListener('click', (e) => {
            const parent  = e.target.parentNode.parentNode.parentNode.parentNode;
            const child  = e.target.parentNode.parentNode.parentNode;
            parent.removeChild(child);
        })
    })

    medicine.value = '';
    quantity.value = '';
    allCheckBox.forEach(element => {
        element.checked = false;
    });
}
