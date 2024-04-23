# Use a base image. Here, we are using nginx as the web server.
FROM nginx:alpine

# Copy HTML, CSS, JS, images, resume, and fonts directories to the nginx web server's default public directory.
COPY index.html /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY images /usr/share/nginx/html/images
COPY sass /usr/share/nginx/html/sass
COPY ResumeShivam.pdf /usr/share/nginx/html/resume
COPY font /usr/share/nginx/html/font

# Expose port 80, which is the default port for HTTP traffic.
EXPOSE 80