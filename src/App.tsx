import { tsx, create } from '@dojo/framework/core/vdom';
import Outlet from '@dojo/framework/routing/Outlet';
import Header from './Header';
import BlogList from './BlogList';
import Blog from './Blog';

const factory = create();

export default factory(function App() {
	return (
		<div>
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
