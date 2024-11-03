function add(numbers) {
    if (numbers === '') {
        return 0;
    }

    let delimiter = ',';
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = parts[0].slice(2);
        numbers = parts[1];
    }

    const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`))
                                 .map(num => parseFloat(num.trim()));

    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numberArray.reduce((sum, num) => sum + (num > 1000 ? 0 : num), 0);
}

export default add;
