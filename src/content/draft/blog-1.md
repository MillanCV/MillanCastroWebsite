---
title: 'Tmux, atajos de teclado y formas de trabajo'
pubDate: 02-03-2024
sortOrder: 1
description: 'Coleccion personal de atajos y consejos para trabajar con tmux.'
author: 'Millan Castro'
image:
    url: 'https://astro.build/assets/blog/astro-1-release-update/cover.jpeg' 
    alt: 'The Astro logo with the word One.'
tags: ["tmux", "workflows", "shortcuts"]
---
Readers occasionally request which static HTML generator is used by fabiensanglard.net, and if they can take the same stylesheet/ fonts to start their own blog. I usually send back the whole 134 lines of gen.php[^1] and invite them to copy whatever they need to get started[^2].

I also add a, somewhat unsolicited, piece of advice. Writers who are getting started may not need any of this stuff. All you may need is HTML.

## What I've accomplished

* **Installing Astro**: First, I created a new Astro project and set up my online accounts.
* **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.
* **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.



## Code example

```javascript
// Initialize WebSocket connection
const socket = new WebSocket('wss://my-websocket-url')

// Listen for open connection
socket.addEventListener('open', (event) => {
  console.log('You say hello...')
})

// Listen for messages
socket.addEventListener('message', (event) => {
  console.log('Incoming message: ', event.data)
})

// Listen for close connection
socket.addEventListener('close', (event) => {
  console.log('...and I say goodbye!')
})

// Send a message
socket.send('A message')

// Close websocket connection
socket.close()
```



 [^1]: Una referencia.
 [^2]: Una referencia.