import { tsx, create } from '@dojo/framework/core/vdom';
import block from '@dojo/framework/core/middleware/block';
import theme from '@dojo/framework/core/middleware/theme';
import blogs from './blogs.block';
import BlogPreview from './BlogPreview';
import * as css from './BlogList.m.css';

const factory = create({ block, theme });

export default factory(function BlogList({ middleware: { block, theme } }) {
	const previews = block(blogs)() || [];
	const themeCss = theme.classes(css);
	return (
		<section classes={[themeCss.root]}>
			<div classes={[themeCss.list]}>
				{previews.map((preview, index) => (
					<BlogPreview key={index} {...preview.meta} file={preview.file} />
				))}
			</div>
		</section>
	);
});
