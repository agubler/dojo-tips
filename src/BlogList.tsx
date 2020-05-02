import { tsx, create } from '@dojo/framework/core/vdom';
import block from '@dojo/framework/core/middleware/block';
import blogs from './blogs.block';
import BlogPreview from './BlogPreview';
import * as css from './BlogList.m.css';

const factory = create({ block });

export default factory(function BlogList({ middleware: { block } }) {
	const previews = block(blogs)() || [];
	return (
		<section classes={[css.root]}>
			{previews.map((preview, index) => (
				<BlogPreview key={index} {...preview.meta} file={preview.file} />
			))}
		</section>
	);
});
