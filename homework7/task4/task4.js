
document.querySelector('button.deleteItem').addEventListener('click', function () {
    document.querySelector("option[selected]").remove();

});



document.getElementById("selection").addEventListener("change", function () {
    let value = this.value;
    document.querySelector("option[value='" + value + "']").setAttribute('selected', 'selected');;
    // const $select = document.querySelector('select.users');
    // $select.value = this.value;
})