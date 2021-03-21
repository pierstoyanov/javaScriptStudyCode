function newDomElement(type, attributes, ...content) {
	/**
	 * (type: str, attributes: obj, ...content)
	 * create new Dom element of type with attrs from obj values and content 
	 */

	const result = document.createElement(type);
	
	for (let [attr, val] of Objec.entries(attributes || {})) {
		if (attr.substring(0, 2) == 'on') {
			result.addEventListener(attr.substring(2).toLocaleLowerCase(), val);
		} else {
			result[attr] = val;
		}
	}
	
	content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
	
	content.forEach(e => {
		if (typeof(e) == 'string' || typeof(e) == 'number') {
			const node = document.createTextNode(e);
			result.appendChild(node);
		} else {
			result.appendChild(e);
		}
	})
	return result;
}