import { tsx, create } from '@dojo/framework/core/vdom';
import Link from '@dojo/framework/routing/Link';

import * as css from './BlogPreview.m.css';

interface BlogPreviewProperties {
	author: string;
	title: string;
	description: string;
	image: string;
	file: string;
}

const factory = create().properties<BlogPreviewProperties>();

export default factory(function BlogPreview({ properties }) {
	const { image, file, title, description, author } = properties();
	return (
		<article key="root" classes={[css.root]}>
			<Link to="blog" params={{ blog: file }} classes={[css.link]}>
				<div classes={[css.container]}>
					<div classes={[css.imageWrapper]}>
						<img loading="lazy" src={image} classes={[css.image]} alt={title} />
					</div>
					<div classes={[css.textWrapper]}>
						<h1 classes={[css.title]}>{title}</h1>
						<p classes={[css.snippet]}>{description}</p>
						<p classes={[css.author]}>{`By ${author}`}</p>
					</div>
				</div>
			</Link>
		</article>
	);
});
