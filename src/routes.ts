export default [
	{
		id: 'blog-list',
		path: '/',
		outlet: 'main',
		defaultRoute: true,
	},
	{
		id: 'blog',
		path: 'blog/{blog}',
		outlet: 'main',
	},
];
