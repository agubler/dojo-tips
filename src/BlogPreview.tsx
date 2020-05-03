import { tsx, create } from '@dojo/framework/core/vdom';
import Link from '@dojo/framework/routing/Link';
import theme from '@dojo/framework/core/middleware/theme';

import * as css from './BlogPreview.m.css';

interface BlogPreviewProperties {
	author: string;
	title: string;
	description: string;
	image: string;
	file: string;
}

const factory = create({ theme }).properties<BlogPreviewProperties>();

export default factory(function BlogPreview({ properties, middleware: { theme } }) {
	const { image, file, title, description, author } = properties();
	const themeCss = theme.classes(css);

	return (
		<article key="root" classes={[themeCss.root]}>
			<Link to="blog" params={{ blog: file }} classes={[themeCss.link]}>
				<div classes={[themeCss.container]}>
					<div classes={[themeCss.imageWrapper]}>
						<picture>
							<source type="image/webp" srcset={image.replace(/\.(jpg|png)/, '.webp')} />
							<source type="image/png" srcset={image} />
							<img alt={title} loading="lazy" classes={[themeCss.image]} src={image} />
						</picture>
					</div>
					<div classes={[themeCss.textWrapper]}>
						<h1 classes={[themeCss.title]}>{title}</h1>
						<p classes={[themeCss.snippet]}>{description}</p>
						<p classes={[themeCss.author]}>{`By ${author}`}</p>
					</div>
				</div>
			</Link>
		</article>
	);
});
