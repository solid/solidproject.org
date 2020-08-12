---
layout: for-developers
title: "Use Nginx as a reverse proxy"
permalink: for-developers/pod-server/nginx
tags: [pod-server]
categories: [Running a Pod Server]
exclude: true
---

# Nginx configuration for Solid on Port 8443

## Redirects all HTTP traffic to the HTTPS host
```nginx
server {
  ## In case of conflict, either remove "default_server" from the listen line below,
  ## or delete the /etc/nginx/sites-enabled/default file.
  listen 0.0.0.0:80;
  listen [::]:80;
  server_name solidweb.org;
  server_tokens off; ## Don't show the nginx version number, a security best practice
  return 301 https://$http_host$request_uri;
  access_log  /var/log/nginx/solid_access.log;
  error_log   /var/log/nginx/solid_error.log;
}

server {
  listen *:443 ssl;
  listen [::]:443 ssl;
  server_name solidweb.org;
  server_tokens off;

  access_log  /var/log/nginx/solid_ssl_access.log;
  error_log   /var/log/nginx/solid_ssl_error.log;

ssl_certificate /etc/letsencrypt/archive/solidweb.org/fullchain1.pem;
ssl_certificate_key /etc/letsencrypt/archive/solidweb.org/privkey1.pem;

root /var/www/html;

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

* `systemctl restart nginx`
* `nano /var/www/html/config/templates/new-account/settings/serverSide.ttl`

```turtle
@prefix dct: <http://purl.org/dc/terms/>.
@prefix pim: <http://www.w3.org/ns/pim/space#>.
@prefix solid: <http://www.w3.org/ns/solid/terms#>.

<>
  a pim:ConfigurationFile;
  dct:description "Administrative settings for the POD that the user can only read." .

</>
    solid:storageQuota "250000000" .
```
* `systemctl start solid.service`
