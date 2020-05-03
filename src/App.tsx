import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import Outlet from '@dojo/framework/routing/Outlet';
import Header from './Header';
import BlogList from './BlogList';
import Blog from './Blog';

import blogTheme from './theme';
import * as css from './App.m.css';

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	const themeCss = theme.classes(css);
	return (
		<div classes={[themeCss.root]}>
			<div
				id="light-theme"
				data-theme={blogTheme.variants.light.root}
				classes={[blogTheme.variants.light.root]}
			></div>
			<div
				id="dark-theme"
				data-theme={blogTheme.variants.dark.root}
				classes={[blogTheme.variants.dark.root]}
			></div>
			<Header title="Dojo Tips" />
			<Outlet id="main">
				{{
					'blog-list': <BlogList />,
					blog: ({ params }) => <Blog name={params.blog} />,
				}}
			</Outlet>
		</div>
	);
});
