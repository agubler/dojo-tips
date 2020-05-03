---
title: Introduction to Dojo
date: 2020-05-02
author: Anthony Gubler
description: An introduction to building web applications with modern Dojo
tags: javascript, web development, dojo
image: assets/dojo2-logo-black-vertical.png
---

# Might write a blog at some point

```tsx
import { create, tsx } from '@dojo/framework/core/vdom';

const factory = create();

export default factory(function App() {
	return <div>Hello Blog</div>;
});
```

## Second Header

```shell
npx -p @dojo/cli-create-app@next -p @dojo/cli@next -- dojo create -n my-first-dojo-app
```
