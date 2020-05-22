---
title: Getting started with Dojo
date: 2020-05-22
author: Anthony Gubler
description: An introduction to building web applications with modern Dojo
tags: javascript, web development, dojo
image: assets/dojo2-logo-black-vertical.png
---

# What is Dojo

Dojo is a modern TypeScript framework designed from the ground up to make building web applications easy and fun. Dojo has always been focussed on providing compatibility with the emerging web standards, interoperability with the wider web development ecosystem and a batteries included approach with intelligent defaults. Dojo aims to provide developer friendly, intuitive APIs without compromising the experience for your users. Over the last 2 years since the initial 2.0.0 release, Dojo has continued to evolve across the entire framework, with core features that aim to cover every aspect of modern web application development.

Core Dojo features:

-   Custom Dojo rendering engine for widgets and DOM nodes
-   Flexible, composable functionality with Dojo middleware
-   Zero config Custom element generation, output any Dojo widget as a custom element
-   Test renderer for testing Dojo widgets
-   Routing and Store functionality
-   Bespoke Dojo build commands, with intelligent defaults
-   Automatic route based and configuration driven code splitting
-   Conditionally load polyfills depending on usage and browser capabilities
-   Out of the box PWA support with a just a few lines of configuration
-   Build time rendering, inline html and CSS at build time including support for fully static sites
-   Dojo Blocks, execute modules at build time and load the block bundle at runtime
-   Comprehensive widget library
-   Dojo commands for creating applications and widget libraries
-   Dojo Parade, a complete, automated widget example and documentation generation tool
-   [Seamless integration with Vercel](https://vercel.com/guides/deploying-dojo-with-vercel), with built-in support for Dojo
-   [Dojo Codesandbox integration](https://codesandbox.io/s/github/dojo/dojo-codesandbox-template) and standard template for getting started quickly

And much more! Over the coming months, hopefully I'll be covering a number of these features here on Dojo Tips.

# Getting started with the Dojo CLI

The easiest way to get started with Dojo is by using the Dojo CLI. The Dojo CLI is a command line application used throughout development to run Dojo commands, the CLI can be installed via `npm` globally or using `npx` to run commands without the need for a global installation.

```bash
npm install @dojo/cli -g
```

Once the CLi has been installed, you can run `dojo` on the command line to see what commands are available. Most commands need to be installed separately, the command to get started with Dojo is the `cli-create-app` command, which creates a skeleton Dojo application to get you up and running quickly.

```bash
npm install @dojo/cli-create-app -g
```

Once the command is installed you can run `dojo create app --help` to see all the options.

# The starter Dojo application

To create your Dojo application run (for the demo we will use `--tsx` option to create an application using `tsx`)

```bash
dojo create app --name my-first-dojo-app --tsx
```

If you prefer to use `npx` instead of globally installing dependencies globally you can run:

```bash
npx -p @dojo/cli-create-app -p @dojo/cli -- dojo create --name my-first-dojo-app --tsx
```

<!-- ![Dojo cli create app output](assets/getting-started-with-dojo/create-app-output.jpg) -->

Once the command completes a brand new project will be created in the `my-first-dojo-app` directory. The default template, includes a basic application with a header with routing setup.

To build and run your application for development, a npm script is pre-configured.

```bash
npm run dev
```

This builds the application using the `@dojo/cli-build-app` command in `watch` mode with the development server running, by default the port used is `9999` meaning your Dojo application can be access at http://localhost:9999.

# Deploying to Vercel (formally Zeit)

When you've finished working (or just got started) on your application and want to shout about it to the world, there's no easier way to deploy a Dojo application than using [Vercel's custom Dojo integration](https://vercel.com/guides/deploying-dojo-with-vercel).

All that is needed is to have the [`vercel` package installed globally](https://vercel.com/download), `npm install vercel -g`. Once installed, running `vercel --prod` in your application folder will deploy the built application to your Vercel account (once you have logged in).

<!-- ![deploying a Dojo application with vercel](assets/getting-started-with-dojo/deploy-to-vercel.jpg) -->

Alternatively you can integrate your application's github (bitbucket and gitlab are supported too) repository by clicking `Import Project` from the Vercel dashboard and now you will have a new deployment for pull requests and merges to master auto-magically.

# Conclusion

Getting started with Dojo has never been easier! From creating your Dojo application to deploying the application into production with the Dojo CLI and excellent tooling available from Vercel, meaning that there has never been a better time to jump in and build your next project. Happy coding!
