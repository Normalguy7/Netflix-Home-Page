const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


//select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to curent tab
    this.classList.add('tab-border')
    // grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // add show class
    tabContentItem.classList.add('show');
}

//removing the red line
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//listen for tabclick
tabItems.forEach(item => item.addEventListener('click', selectItem));