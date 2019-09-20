module.exports = num => {
    if (typeof num !== 'number') throw new TypeError('Incorrect argument type');
    return num < 0 ? num * -1 : num;
}
