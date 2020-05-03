import renderer, { tsx } from '@dojo/framework/core/vdom';
import Registry from '@dojo/framework/core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import StateHistory from '@dojo/framework/routing/history/StateHistory';
import { registerThemeInjector } from '@dojo/framework/core/mixins/Themed';
import theme from './theme/index';

import App from './App';
import routes from './routes';

const registry = new Registry();
registerRouterInjector(routes, registry, {
	HistoryManager: StateHistory,
	setDocumentTitle: ({ params, id, title }) => {
		if (id === 'blog') {
			return `Dojo Tips - ${params.blog
				.split('-')
				.map((word) => word.replace(/^\w/, (letter) => letter.toUpperCase()))
				.join(' ')}`;
		}
		return title;
	},
});
registerThemeInjector(theme, registry);

const r = renderer(() => <App />);
r.mount({ registry });
