---
layout: for-developers
title: "Using Apache as a reverse proxy"
permalink: self-hosting/nss/apache
tags: [pod-server]
exclude: true
redirect_from:
  - /for-developers/pod-server/apache
redirect_to:
  - https://github.com/solid/solidproject.org/wiki/Using-Apache-as-a-reverse-proxy
---

# Using Apache as a Reverse Proxy

A reverse proxy allows you to run a Solid server on a local port
and let the proxy handle traffic to public HTTP and HTTPS ports.

## Configuration

- enable modules
  (`ssl.conf`, `ssl.load`, `proxy.conf`, `proxy.load`, `proxy_html.conf`, `proxy_html.load`, `proxy_http.conf`, `proxy_http.load`, `rewrite.load`, `socache_shmcb.load`)
  by creating symlinks in `/etc/apache2/mods-enabled/` pointing to `/etc/apache2/mods-available/*`

```shell
cd /etc/apache2/mods-enabled
for module in ssl.conf ssl.load proxy.conf proxy.load proxy_html.conf proxy_html.load proxy_http.conf proxy_http.load rewrite.load shmcb.load;
  do ln -s ../mods-available/$module $module;
done
```

- edit the appropriate sections of `/etc/apache2/sites-available/000-default.conf` as follows, substituting your actual domain name for `example.org`:

```apache
<VirtualHost *:80>
ServerName example.org
Redirect / https://example.org

DocumentRoot /var/www/example.org
</VirtualHost>

<VirtualHost *:80>
ServerAlias *.example.org
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</VirtualHost>

<VirtualHost *.443>
ServerName example.org
DocumentRoot /var/www/example.org

SSLEngine On
SSLProxyEngine On
SSLProxyVerify None
SSLProxyCheckPeerCN Off
SSLProxyPeerName Off
SSLProxyCheckPeerExpire Off
ProxyPreserveHost On

SSLCertificateFile /etc/letsencrypt/live/example.org/cert.pem
SSLCertificateKeyFile /etc/letsencrypt/live/example.org/privkey.pem
SSLCertificateChainFile /etc/letsencrypt/live/example.org/fullchain.pem

ProxyPass / https://localhost:8443/
ProxyPassReverse / https://localhost:8443/
</VirtualHost>

<VirtualHost *:443>
ServerAlias *.example.org

SSLEngine On
SSLProxyEngine On
SSLProxyVerify None
SSLProxyCheckPeerCN Off
SSLProxyPeerName Off
SSLProxyCheckPeerExpire Off
ProxyPreserveHost On

SSLCertificateFile /etc/letsencrypt/live/example.org/cert.pem
SSLCertificateKeyFile /etc/letsencrypt/live/example.org/privkey.pem
SSLCertificateChainFile /etc/letsencrypt/live/example.org/fullchain.pem

ProxyPass / https://localhost:8443/
ProxyPassReverse / https://localhost:8443/
</VirtualHost>
```

- edit the appropriate sections of `/etc/apache2/sites-available/default-ssl.conf` as follows:

```apache
<VirtualHost _default_:443>
ServerName example.org:443
DocumentRoot /var/www/example.org

SSLEngine on

SSLCertificateFile /etc/letsencrypt/live/example.org/cert.pem
SSLCertificateKeyFile /etc/letsencrypt/live/example.org/privkey.pem
SSLCertificateChainFile /etc/letsencrypt/live/example.org/fullchain.pem
</VirtualHost>
```

# Activating the configuration

```shell
systemctl restart apache2
```
