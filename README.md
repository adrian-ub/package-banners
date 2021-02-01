<a href="https://vercel.com/new/project?template=adrian-ub/banners"><img width="128" src="https://vercel.com/button" align="right"></a>

# [Open Graph Image as a Service](https://banners.adrianub.vercel.app)

![](https://banners.adrianub.vercel.app/Make%20your%20Banners%20and%20Open%20Source%20packages%20shine,%20by%20generating%20beautiful%20social%20images..png?theme=light&amp;md=1&amp;pattern=architect&amp;author=Adrián+UB&amp;username=adrian-ub)

Serverless service that generates dynamic Open Graph images that you can embed in your `<meta>` tags.

For each keystroke, headless chromium is used to render an HTML page and take a screenshot of the result which gets cached.

See the image embedded in the tweet for a real use case.


## What is an Open Graph Image?

Have you ever posted a hyperlink to Twitter, Facebook, or Slack and seen an image popup?
How did your social network know how to "unfurl" the URL and get an image?
The answer is in your `<head>`.

The [Open Graph protocol](http://ogp.me) says you can put a `<meta>` tag in the `<head>` of a webpage to define this image.

It looks like the following:

```html
<head>
  <title>Title</title>
  <meta property="og:image" content="http://example.com/logo.jpg" />
</head>
```

## Why use this service?

The short answer is that it would take a long time to painstakingly design an image for every single blog post and every single documentation page. And we don't want the exact same image for every blog post because that wouldn't make the article stand out when it was shared to Twitter.

That's where `banners.adrianub.vercel.app` comes in. We can simply pass the title of our blog post to our generator service and it will generate the image for us on the fly!

It looks like the following:

```html
<head>
  <title>Hello World</title>
  <meta property="og:image" content="https://banners.adrianub.vercel.app/Hello%20World.png" />
</head>
```

Now try changing the text `Hello%20World` to the title of your choosing and watch the magic happen ✨

This service also lets you generate beautiful looking social images for your PHP, Laravel packages, NPM and Yarn. You have already put a lot of time and effort into your package, so why not make it look beautiful using this service.

![](https://banners.adrianub.vercel.app/My%20Package.png?type=package&theme=light&packageManager=yarn+add&packageName=%40org%2Fmy-awesome-package&description=This+is+why+it%27s+awesome&images=angular&widths=250&heights=250&images=tailwindcss&widths=250&heights=250&pattern=architect&md=1&showWatermark=1&fontSize=100px)