import { tsx, create } from '@dojo/framework/core/vdom';
import block from '@dojo/framework/core/middleware/block';
import blog from './blog.block';

import * as css from './Blog.m.css';

interface BlogProperties {
	name: string;
}

const factory = create({ block }).properties<BlogProperties>();

export default factory(function BlogList({ middleware: { block }, properties }) {
	const { name } = properties();
	const content = block(blog)({ path: `${name}.md` });

	if (!content) {
		return null;
	}

	return (
		<article>
			<header classes={[css.header]}>
				<div classes={[css.container]}>
					<time classes={[css.date]}>
						<small>{new Date(content.meta.date).toDateString()}</small>
					</time>
					<h3 classes={[css.title]}>
						<span classes={[css.titleLabel]}>{content.meta.title}</span>
					</h3>
					<h4 classes={[css.description]}>{content.meta.description}</h4>
					<h5 classes={[css.author]}>{`By ${content.meta.author}`}</h5>
				</div>
			</header>
			<div classes={[css.blog]}>{content.content}</div>
		</article>
	);
});
