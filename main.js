const ncp = require("copy-paste");
function cssToJsx(textForReplase){
    const regexp = /(?<name>\S+):\s*(?<value>[^;]*)/g;
    const matches = cssStyle.matchAll(regexp);
    let jsxStyle = '';
    for (const match of matches) {
        if (match[1][0] == '-') continue;
        let name = match[1].replace(/-\w/g, x => x.replace('-', '').toUpperCase());
        let value = match[2];
        let quotationMark = isNaN(value) ? '\'' : '';
        jsxStyle += `${name}: ${quotationMark}${value}${quotationMark},\n`;
    };
    return jsxStyle;
};
let cssStyle = ncp.paste();
let jsxStyle = cssToJsx(cssStyle);
ncp.copy(jsxStyle);
