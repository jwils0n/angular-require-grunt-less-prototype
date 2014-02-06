require.config({
	baseUrl: 'js',

	paths: {
		templates: '../templates/main',
		modules: 'app/modules',
		nls: 'nls',
		vendor: 'vendor',
		angular: 'vendor/angular',
		jquery: 'vendor/jquery',
		bootstrap: 'vendor/bootstrap',
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

	waitSeconds: 60,

	deps: ['app/bootstrap']
});