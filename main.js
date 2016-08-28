
var md = window.markdownit({})
	.use(window.markdownItToc)
	.use(window.markdownItAttrs);

var content = "@[toc]\n" +
"# Hey there\n" +
"Just a small test.\n" +
"# This title loses its class {.some-class}\n" +
"This text does keep its class. {.some-class}\n" +
"## Totally realistic scenario\n" +
"Never seen so much text."

var result = md.render(content);

document.body.innerHTML = result;
