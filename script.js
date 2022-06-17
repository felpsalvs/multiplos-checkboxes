const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
// Verifique se eles estavam com a tecla shift pressionada
// E verifique se eles estão verificando

let inBetween = false;
if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
            console.log('Starting to check them in between!')
        }

        if (inBetween) {
            checkbox.checked = true;
        }
    });
}

lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));