---
title: "Are Reusable Components in React Really That Important?"
excerpt: "This blog is mostly about my experience working on this project. It's not my first application, and it's definitely not the first one I’ve built while exploring new technologies. Over time, I’ve realized that the best way to learn isn’t by just reading theory or memorizing best practices — it's by building something. Try, fail, learn, and improve..."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2025-05-21T00:05:00.322Z"
author:
  name: Vidosava Arsic
  picture: "/assets/blog/authors/vida.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

This blog is mostly about my experience working on this project. It's not my first application, and it's definitely not the first one I’ve built while exploring new technologies. Over time, I’ve realized that the best way to learn isn’t by just reading theory or memorizing best practices. It's by building something. Try, fail, learn, and improve. That’s how you become a real developer: by learning from your mistakes. This time was no different. I was learning **React**, **Next.js**, **Tailwind**, **Typescript**,and **Markdown**. I started with some legacy code. Actually, it was my first portfolio, which I had built a few months ago using JavaScript, HTML, CSS, some technologies I'm already familiar with. What I discovered during this process is that sometimes, it’s not more time that you need, it’s inspiration.

## My First Real React Project

This was my first serious application built with React. I’d been learning React mostly on my own, using great online resources, following advice from my mentor. I felt like I was moving in the right direction. Still, I had doubts. I had never used a frontend framework before, so my concerns were real. I wasn’t sure how React would fit into my application, how components work, how to organize them, and what “best practices” even meant in real projects.

## So... Components?

Whenever I talk to someone about React, the first thing that comes up is usually components. There are questions: when to use them, why we use them, and how many we really need. At first, I kept asking myself:

1.Should I really split this into multiple components?

2.Will this component actually be reusable or is it just adding complexity?

3.Where does this component belong in my project structure?

4.And most importantly — will I reuse this later, or am I overengineering?

At first, I created components just to avoid long files, but I didn’t always understand why I was doing it. That lack of clarity sometimes led to overengineering. These are important questions, especially when you find yourself looking at a 200 line file and thinking, 'Okay. I need to break this down.'

### The Value of Reusable Components:

The first and most important mindset shift is to start thinking about components like functions: they should do one thing, do it well, and ideally, be reusable. The more reusable your components are, the more consistent and maintainable your application becomes. Instead of duplicating code, developers can create components once and use them across different parts of an application. A well-designed component should: 1. Make your code cleaner and easier to understand. 2. Reduces duplication. 3.Encourages scalability. 4.And helps other developers (or future you) read and reuse your code with confidence. Also, Reusable components become even more valuable in large teams and long-term projects. The more your app grows, the more you’ll benefit from reuse. Teams save time, avoid redundant work, and onboard new developers more smoothly.

Not using reusable components when you should is a common mistake. I made it myself recently. But it’s also one of the best ways to learn. Reusable components aren't just a "nice to have", they are the foundation of building scalable, maintainable React applications. Don't create components just because you can. Create them because they have a clear purpose, can be used again, and help your code become more structured and future proof. Good code isn’t just about getting things to work. It’s about writing something that makes sense tomorrow, not just today.

This project taught me that good architecture isn’t accidental, it comes through iteration, reflection, and plenty of trial and error. I still have a lot to learn, but I now feel more confident in making decisions about component structure and overall design. If you're just starting with React, don't worry too much about getting everything right from the beginning, just start building. Clarity will come with experience.
