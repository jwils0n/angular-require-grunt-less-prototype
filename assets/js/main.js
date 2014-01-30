var require = {
	baseUrl: '/'
	, paths: {
		nls: '../nls',
		jquery: '../deps/libs/jquery/jquery',
		bootstrap: '../deps/libs/bootstrap/dist/js/bootstrap',
		hgn: '../deps/libs/requirejs-hogan-plugin/hgn',
		text: '../deps/libs/requirejs-hogan-plugin/text',
		hogan: '../deps/libs/hogan/hogan'
	}

	// Shims
	, shim: {
		jquery: {
			exports:'$'
		},

		hogan: {
			exports: 'Hogan'
		},

		bootstrap: ['jquery']
	}

	, hgn : {
		templateExtension : '.tpl'
	}

	// Define timeout for require
	, waitSeconds: 60
};