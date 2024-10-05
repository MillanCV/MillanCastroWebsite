---
title: 'How I add P5.js sketches to MarkDown posts in my Astro blog'
pubDate: 05-10-2024
description: 'trying p5 in astro'
---
<div class="flex justify-center mb-12" >
  <iframe 
    id="p5-sketch-iframe"
    src="https://MillanCV.github.io/nature_of_code_sketches/src/2_forces/examples/1_masa_0/index.html"
    width="400" 
    height="400"
    loading="lazy">
  </iframe>
</div>

These days, I'm reading the physical edition of the book *The Nature Of Code* by Daniel Shiffman. To track my progress, I want to create a series of posts detailing my journey through the book. Therefore, I need a way to display P5.js sketches in my posts.

This blog is made with Astro and Tailwind, and my aim is to keep it simple and minimalist. I want to ensure that
I can easily update it after months of inactivity. I spent last evening and this morning figuring out a good workflow to display P5.js in my posts.

My first approach was to made a folder on my project called "Sketches", similar to "Components". There I could save every sketch as an Astro component and import these components in my posts. To do this, I would need to use MDX format for my posts instead of plain Markdown.

After chatting with ChatGPT I found a convoluted way to show multiple sketches in each post. Unfortunately, the page's performance dropped to almost 70% in the performance measurement in DevTools. Outrageous.

Seeing that the complexity was increasing and the performance was lacking, I sought other other solutions. I also began to realize I didn't want my sketches to be tied in the blog.

While analyzing the website for [The Nature Of Code](https://natureofcode.com/forces/) I noticed that it displayed multiple sketches per page and mantained good performance. By examining its code, I discovered how they embed sketches:

```javascript
 <figure>
    <div data-type="embed" data-p5-editor="https://editor.p5js.org/natureofcode/sketches/4IRI8BEVE" data-example-path="examples/02_forces/example_2_1_forces"><img src="examples/02_forces/example_2_1_forces/screenshot.png"></div>
    <figcaption>Clicking the mouse applies the wind force.</figcaption>
  </figure>
```

I though about wanting something similar, with a reposity for my sketches, like a Github repo, where I could storage them and access them when needed, like now. I already had such a repo from months ago when I worked through the digital book, so I could use those sketches inmediately. This approach also frees me from having the sketches tied to the blog.

After some tests and adding the repo to GitHub Pages, I began to see positive results with good performance. Here's how I'm displaying sketches in this post now:

```javascript
<div class="flex justify-center mb-16" >
  <iframe 
    id="p5-sketch-iframe"
    src="https://MillanCV.github.io/nature_of_code_sketches/src/1_vectors/examples/4_acceleration_1/index.html"
    width="400" 
    height="400"
    style="border: none; overflow: hidden;"
    loading="lazy">
  </iframe>
</div>
```


<div class="flex justify-center mb-16" >
  <iframe 
    id="p5-sketch-iframe"
    src="https://MillanCV.github.io/nature_of_code_sketches/src/1_vectors/examples/4_acceleration_1/index.html"
    width="400" 
    height="400"
    style="border: none; overflow: hidden;"
    loading="lazy">
  </iframe>
</div>


Now I have no excuses to start reading the book, creating sketches and posting about them!