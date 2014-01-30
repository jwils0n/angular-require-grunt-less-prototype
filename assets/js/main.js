require.config({
	baseUrl: '',

	paths: {
		nls: 'nls',
		vendor: 'vendor',
		angular: 'vendor/angular',
		jquery: 'vendor/jquery',
		bootstrap: 'vendor/bootstrap',
		hgn: 'vendor/hgn',
		text: 'vendor/text',
		hogan: 'vendor/hogan'
	},

	shim: {
		angular: {
			exports: 'angular'
		},

		jquery: {
			exports: '$'
		},

		hogan: {
			exports: 'Hogan'
		},

		bootstrap: ['jquery']
	},

	hgn : {
		templateExtension : '.tpl'
	},

	waitSeconds: 60,

	deps: ['app/bootstrap']
});