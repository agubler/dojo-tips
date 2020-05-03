import { tsx, create } from '@dojo/framework/core/vdom';
import block from '@dojo/framework/core/middleware/block';
import theme from '@dojo/framework/core/middleware/theme';
import blog from './blog.block';

import * as css from './Blog.m.css';

interface BlogProperties {
	name: string;
}

const factory = create({ block, theme }).properties<BlogProperties>();

export default factory(function BlogList({ middleware: { block, theme }, properties }) {
	const { name } = properties();
	const content = block(blog)({ path: `${name}.md` });
	const themeCss = theme.classes(css);

	if (!content) {
		return null;
	}

	return (
		<article>
			<header classes={[themeCss.header]}>
				<div classes={[themeCss.container]}>
					<time classes={[themeCss.date]}>
						<small>{new Date(content.meta.date).toDateString()}</small>
					</time>
					<h3 classes={[themeCss.title]}>
						<span classes={[themeCss.titleLabel]}>{content.meta.title}</span>
					</h3>
					<h4 classes={[themeCss.description]}>{content.meta.description}</h4>
					<h5 classes={[themeCss.author]}>{`By ${content.meta.author}`}</h5>
				</div>
			</header>
			<div classes={[themeCss.blog]}>
				<div classes={[themeCss.content]}>{content.content}</div>
			</div>
		</article>
	);
});
