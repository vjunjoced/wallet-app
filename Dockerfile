FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

# Permission
RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*

# Expose port
EXPOSE 3000

# Start
CMD ["nginx", "-g", "daemon off;"]
