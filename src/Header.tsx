import { tsx, create } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import { createICacheMiddleware } from '@dojo/framework/core/middleware/icache';
import Link from '@dojo/framework/routing/Link';

import * as css from './Header.m.css';

interface HeaderProperties {
	title: string;
}

const icache = createICacheMiddleware<{ dark: boolean }>();

const factory = create({ icache, theme }).properties<HeaderProperties>();

export default factory(function Header({ properties, middleware: { theme, icache } }) {
	const { title } = properties();
	const themeCss = theme.classes(css);
	return (
		<nav classes={[themeCss.root]}>
			<div classes={[themeCss.container]}>
				<Link to="blog-list" classes={[themeCss.link]}>
					{title}
				</Link>
				<label classes={[themeCss.switcher]}>
					<span for="switch" classes={[themeCss.label]}>
						switch theme
					</span>
					<input id="switch" classes={[themeCss.switchInput]} type="checkbox" />
					<span classes={[themeCss.slider, themeCss.round]}></span>
				</label>
			</div>
		</nav>
	);
});
