document.addEventListener("DOMContentLoaded", function () {
  // Define an array of project objects
  const projects = [
      {
          title: "Project 1",
          description: "A responsive website built with HTML, CSS, and JavaScript.",
          image: "project1.jpg",  // Replace with your image paths
          link: "https://example.com/project1"
      },
      {
          title: "Project 2",
          description: "A personal blog application built using React.",
          image: "project2.jpg",
          link: "https://example.com/project2"
      },
      {
          title: "Project 3",
          description: "A weather app that fetches live weather data.",
          image: "project3.jpg",
          link: "https://example.com/project3"
      }
  ];

  // Define an array of blog post objects
  const blogPosts = [
      {
          title: "Understanding CSS Grid Layout",
          content: "CSS Grid Layout is a powerful tool for creating complex, responsive web designs. In this post, we’ll explore how to use it effectively.",
          date: "October 10, 2024",
          link: "https://example.com/blog/css-grid"
      },
      {
          title: "JavaScript ES6 Features You Should Know",
          content: "In this blog post, we dive into the top ES6 features that make JavaScript development more efficient and readable.",
          date: "September 15, 2024",
          link: "https://example.com/blog/js-es6"
      },
      {
          title: "How to Optimize Your Website for Speed",
          content: "Website speed is a critical factor in user experience and SEO. In this article, we discuss some effective strategies for optimizing website speed.",
          date: "August 5, 2024",
          link: "https://example.com/blog/website-speed"
      }
  ];

  // Get the project container and blog container elements
  const projectContainer = document.getElementById("project-container");
  const blogContainer = document.getElementById("blog-container");

  // Function to load and display projects dynamically
  projects.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
      projectElement.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="cta-btn" target="_blank">View Project</a>
      `;
      projectContainer.appendChild(projectElement);
  });

  // Function to load and display blog posts dynamically
  blogPosts.forEach(post => {
      const blogPostElement = document.createElement("div");
      blogPostElement.classList.add("blog-post");
      blogPostElement.innerHTML = `
          <h3><a href="${post.link}" target="_blank">${post.title}</a></h3>
          <p>${post.content}</p>
          <small>Published on: ${post.date}</small>
      `;
      blogContainer.appendChild(blogPostElement);
  });
});
