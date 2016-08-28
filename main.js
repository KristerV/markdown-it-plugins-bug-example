var elementScrolls = []

function insertMarkdownToDocument(content) {

	var md = window.markdownit({})
		.use(window.markdownItToc)
		.use(window.markdownItAttrs)

	var result = md.render(content);
	$('body').append(result);

}

// Get markdown file
$.get('index.md').done(insertMarkdownToDocument);