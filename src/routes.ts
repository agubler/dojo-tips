export default [
	{
		id: 'blog-list',
		path: '/',
		outlet: 'main',
		defaultRoute: true,
		title: 'Dojo Tips Blogs'
	},
	{
		id: 'blog',
		path: 'blog/{blog}',
		outlet: 'main',
	},
];
