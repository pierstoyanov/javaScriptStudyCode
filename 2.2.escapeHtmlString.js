// https://medium.com/javascript-in-plain-english/javascript-algorithm-convert-html-entities-99719d8ca118

// function to escape HTML characters

function escapeHTML(str) {
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



// This removes unsafe characters from HTML text
function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };
  
  