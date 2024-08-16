function toggleMenu(){
    document.getElementById('menu').classList.toggle('d-none');
}

function applyFactor() {
    const factorInput = document.getElementById('text-input');
    const amountCells = document.querySelectorAll('.amount');

    const factor = parseFloat(factorInput.value);

    if (isNaN(factor) || factor <= 0) {
        alert('Bitte gib einen gültigen Faktor ein.');
        return;
    }

    amountCells.forEach(cell => {
        const baseAmount = parseFloat(cell.getAttribute('data-base-amount'));
        if (!isNaN(baseAmount)) {
            const newAmount = baseAmount * factor;
            cell.textContent = formatAmount(newAmount, cell.getAttribute('data-unit'));
        }
    });
}

function formatAmount(amount, unit) {
    if (unit === 'g' || unit === 'stk' || unit === 'EL') {
        return `${Math.round(amount)} ${unit}`;
    } else {
        return `${amount} ${unit}`;
    }
}
