function RNA(dnaStand) {
    const compliments = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    dnaStand = dnaStand.toUpperCase();
    return dnaStand.split('').map(letter => compliments[letter]).join('');
}
function DNA(rnaStand) {
    const compliments = {
        'C': 'G',
        'G': 'C',
        'A': 'T',
        'U': 'A'
    }
    rnaStand = rnaStand.toUpperCase();
    return rnaStand.split('').map(letter => compliments[letter]).join('');
}