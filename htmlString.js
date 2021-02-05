// https://medium.com/javascript-in-plain-english/javascript-algorithm-convert-html-entities-99719d8ca118

// function to escape HTML characters

function escapeHtml(str) {
    let regex = /[&|<|>|"|']/g;
    let htmlString = ('' + str).replace(regex, function(match) {
        if (match === '&') {
            return '&amp;';
        } else if (match === '<') {
            return '&lt;'
        } else if (match === '>') {
            return '&gt;';
        } else if (match === '"') {
            return '&quot;';
        } else {
            return '&#39;';
        }
    });
    return htmlString;
};