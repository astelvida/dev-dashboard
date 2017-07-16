// eslint-disable-next-line no-unused-vars
const cssObj = {
    '.col-1': {
        width: 33.33,
    },
    '.col-2': {
        width: 66.66,
        border: '2px solid green',
    },
    '.col-3': {
        width: 100,
    },
};

const getWidthsObj = (base = 100, num = 1, decimals = 4) => {
    const css = {};
    const decimalAdjust = 10 ** decimals;
    for (let i = 1; i <= num; i += 1) {
        const width = Math.floor((base / num) * i * decimalAdjust) / decimalAdjust;
        css[`.col-${i}`] = { width };
    }
    return css;
};

const stringifyCss = (columns = 1, indent = 4, decimals = 4) => {
    const obj = getWidthsObj(100, columns, decimals);
    let str = '';

    Object.entries(obj).forEach((classPair) => {
        const className = classPair[0];
        const classProps = classPair[1];
        str += `\n${className} {\n`;

        Object.entries(classProps).forEach((propsPair) => {
            const propName = propsPair[0];
            const propValue = propsPair[1];
            const pair = `${propName}: ${propValue}%;`;
            const padLength = pair.length + indent;
            const paddedPair = pair.padStart(padLength);
            str += `${paddedPair}\n`;
        });
        str += '}';
    });
    return str;
};

export default stringifyCss;
