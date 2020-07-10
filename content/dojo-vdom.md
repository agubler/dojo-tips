---
title: Dojo Vdom and Creating Widgets
date: 2020-07-08
author: Anthony Gubler
description: An overview of creating widgets and the Dojo VDOM
tags: javascript, web development, dojo
image: assets/dojo2-logo-black-vertical.png
---

# Rendering in Dojo

Dojo supports two methods for creating widgets and DOM nodes, a functional approach using `v()` for DOM Nodes and `w()` for widgets methods from `@dojo/framework/core/vdom` and tsx (TypeScript version of jsx). Both approaches are functionally equivalent and the choice is down to personal preference.

Dojo uses a virtual DOM implementation, which means you never directly work with the DOM, instead using `v()/w()` or tsx to describe what Dojo should render. Dojo processes and manages these "virtual nodes" to create/update/remove the node in the DOM reactively.

## VDOM Api

### `v()`

The `v()` function is used for describing DOM nodes to render, the first argument is the tag name, followed by the properties and then an array of children.

```ts
import { v } from @dojo/framework/core/vdom;

v('div', {
    stringProperty: 'string',
    functionProperty: () => {},
    booleanProperty: true
}, [ 'Children' ])
```

### `w()`

The `w()` function is used for describing widgets to render, the first argument is the widget to render, followed by the widgets properties and then an array of children.

```ts
import { w } from @dojo/framework/core/vdom;
import MyWidget from './MyWidget';

w(MyWidget, {
    widgetProperty: 'string'
}, [ 'Children' ]);
```

### TSX

To use TSX with Dojo, the `tsx` function needs to be imported from `@dojo/framework/core/vdom` and the module extension set to `.tsx`. TSX covers both DOM nodes and widgets.

DOM nodes are described using lower-cased tag name:

```tsx
import { tsx } from @dojo/framework/core/vdom;

<div stringProperty="string" functionProperty={() => {}} booleanProperty={true}>Children</div>;
```

Widgets are described using an imported widget and must be capitalized:

```tsx
import { tsx } from @dojo/framework/core/vdom;
import MyWidget from './MyWidget';

<MyWidget />;
```

### Special Tags

Dojo supports a collection tags for

#### `virtual`

#### `body`

#### `head`

# Widgets in Dojo

Widgets are the core primitive for rendering _anything_ in Dojo. There are two different mechanisms for defining widgets, the recommended approach is a function-based widget, introduced in Dojo 6 and the original class-based widgets. Dojo Widgets public interface is defined by it's properties, these properties are defined when authoring the widget and passed through by the user when using the widget.

## Function Based Widgets

Creating a function-based widget requires a factory created using the `create` method from `@dojo/framework/core/vdom`. The `create` function returns a factory that can be used to define your widgets.

```ts
import { create, v } from '@dojo/framework/core/vdom';

const factory = create();

export default MyWidget = factory(function MyWidget() {
	return v('div');
});
```

### Typing Properties

### Typing Children

### Widget Key

### Middleware

## Class Based Widgets

### Typing Properties

### Lifecycles

### Mixins

### Metas

### Decorators

## Rendering Lists
