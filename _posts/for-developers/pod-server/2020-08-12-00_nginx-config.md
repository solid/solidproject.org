---
layout: for-developers
title: "Use Nginx as a reverse proxy"
permalink: for-developers/pod-server/nginx
tags: [pod-server]
categories: [Running a Pod Server]
exclude: true
---
Nginx config

* create or modify /etc/nginx/sites-available/default as follows (example editor nano)

`$ nano /etc/nginx/sites-available/default`

```nginx
# Nginx configuration for Solid on Port 8443
## Redirects all HTTP traffic to the HTTPS host
server {
  ## In case of conflict, either remove "default_server" from the listen line below,
  ## or delete the /etc/nginx/sites-enabled/default file.
  listen 0.0.0.0:80;
  listen [::]:80;
  server_name example.org;
  server_tokens off; ## Don't show the nginx version number, a security best practice
  return 301 https://$http_host$request_uri;
  access_log  /var/log/nginx/solid_access.log;
  error_log   /var/log/nginx/solid_error.log;
}

server {
  listen *:443 ssl;
  listen [::]:443 ssl;
  server_name example.org;
  server_tokens off;

  access_log  /var/log/nginx/solid_ssl_access.log;
  error_log   /var/log/nginx/solid_ssl_error.log;

ssl_certificate /etc/letsencrypt/live/example.org/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.org/privkey.pem;

root /var/www/example.org; #webroot

  ## [Optional] Enable HTTP Strict Transport Security
  ## HSTS is a feature improving protection against MITM attacks
  ## For more information see: https://www.nginx.com/blog/http-strict-transport-security-hsts-and-nginx/
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

  location / {
    proxy_pass https://localhost:8443;

    gzip off;
    proxy_redirect off;

    ## Some requests take more than 30 seconds.
    proxy_read_timeout      300;
    proxy_connect_timeout   300;
    proxy_redirect          off;

    proxy_http_version 1.1;

    proxy_set_header    Host                $http_host;
    proxy_set_header    X-Real-IP           $remote_addr;
    proxy_set_header    X-Forwarded-Ssl     on;
    proxy_set_header    X-Forwarded-For     $proxy_add_x_forwarded_for;
    proxy_set_header    X-Forwarded-Proto   $scheme;
  }

}
```

 `$ systemctl restart nginx`
