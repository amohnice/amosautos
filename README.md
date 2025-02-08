### Auto-Parts Website documentation: **designed with a clean and modern aesthetic in mind.**

- The layout focuses on simplicity and ease of use, ensuring a smooth user experience across various devices.
- The color scheme was kept minimal, with a light theme by default and a dark mode toggle for users to switch to a darker interface.
- This design decision was made to enhance accessibility and provide users with more control over their browsing experience.
- The layout is responsive, allowing for a consistent look on both desktop and mobile devices.

## Features Implemented Using JavaScript:

1. **Smooth Scrolling**: JavaScript is used to smoothly scroll to different sections of the page when clicking on anchor links. This was achieved by selecting all anchor tags that link to sections within the same page and applying the scrollIntoView method for a smooth transition.
2. **Dark Mode Toggle**: A toggle button allows users to switch between light and dark modes. By using JavaScript, the body’s class is toggled between dark-mode and the default class, while updating the button icon to reflect the selected theme (sun or moon).
3. **Image Carousel**: The carousel functionality is controlled via JavaScript, where users can click on navigation buttons to move between slides or let the carousel automatically transition every 3 seconds. The carousel uses translateX to move items smoothly.
4. **Form Validation**: The contact form and newsletter subscription include basic error handling with JavaScript. If the user fails to fill out the required fields, an alert is triggered asking them to fill in the missing information.
5. **Navbar Toggling**: The JavaScript code toggles the mobile navigation menu when the hamburger icon (nav-toggler) is clicked. It also handles showing and hiding the overlay that covers the screen when the menu is open.
6. **Back-to-Top Button**: When users scroll down, a back-to-top button becomes visible. When clicked, it smoothly scrolls the user to the top of the page. The button's visibility is controlled by the scroll position.

## Challenges and Solutions:

- One of the challenges faced during development was implementing the smooth scrolling feature across various browsers and ensuring that the page elements aligned properly when the user navigated between sections. I overcame this by using the scrollIntoView method and testing on multiple browsers to ensure cross-browser compatibility.

- Additionally, integrating the carousel with both automatic and manual navigation was a challenge. To resolve this, I used JavaScript to manage the state of the carousel items and ensure both functionalities worked seamlessly, with setInterval controlling automatic transitions.

## Deployment Process:
The website was deployed using both GitHub Pages and Netlify. Here's how each deployment process was handled:

    GitHub Pages Deployment:
        I pushed the project files to a GitHub repository.
        I enabled GitHub Pages through the repository's settings, which served the website directly from the repository.
        The default GitHub Pages URL was automatically generated, but it was updated to a more relevant, custom domain name.

    Netlify Deployment:
        I uploaded the files directly to Netlify without connecting to a Git repository.
        After uploading the files, I changed the default Netlify URL to something more relevant for the project.
        This allowed me to deploy the website quickly and efficiently without requiring any server configuration.

Setback of Netlify Deployment:

    The main downside of deploying via Netlify without connecting to a Git repository is that there are no automatic updates.
    Any changes or updates made to the project would need to be manually uploaded to Netlify. Unlike GitHub Pages (or other Git-based deployment methods), there’s no direct connection to version control for automatic deployment on updates.

- Live demo: [amosautos](https://amosautos.netlify.app/)
- Github pages: [amosautos](https://amohnice.github.io/amosautos/)

# Landing Page with Light and Dark Mode
## Light Mode Image

![Light Mode](assets/images/Landing%20page/light-mode.png)

## Dark Mode Image

![Dark Mode](assets/images/Landing%20page/dark-mode.png)

### Technologies Used:
- HTML
- CSS
- JavaScript

### Instructions:
1. Clone the repository to your local machine. 'https://github.com/amohnice/amosautos.git'
2. Open `index.html` in your browser to view the page.

