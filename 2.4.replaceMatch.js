function replaceMatch(referece, match, newContent) {
	/** Replace content in DOM element matching a rx
	*referece = el reference, match = rx str, newContent = str to be input
	*/
  const content = referece.textContent;
  const matcher = new RegExp(match, 'g');
  const edited = content.replace(matcher, newContent);
  referece.textContent = edited;
};