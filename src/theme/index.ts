import * as Header from './Header.m.css';
import * as blog from './Blog.m.css';
import * as blogList from './BlogList.m.css';
import * as blogPreview from './BlogPreview.m.css';

import * as light from './variants/light.m.css';
import * as dark from './variants/dark.m.css';
import * as def from './variants/default.m.css';

export default {
	theme: {
		'dojo.tips/Blog': blog,
		'dojo.tips/BlogList': blogList,
		'dojo.tips/BlogPreview': blogPreview,
		'dojo.tips/Header': Header,
	},
	variants: {
		default: def,
		light,
		dark,
	},
};
