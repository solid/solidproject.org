---
layout: for-developers
title: "Use Apache as a reverse proxy"
permalink: for-developers/pod-server/apache
tags: [pod-server]
categories: [Running a Pod Server]
exclude: true
---

Apache config<br />
* enable modules (ssl.conf, ssl.load, proxy.conf, proxy.load, proxy_html.conf, proxy_html.load, proxy_http.conf, proxy_http.load, rewrite.load, socache_shmcb.load)<br />
* this is done by creating symlinks in `/etc/apache2/mods-enabled/` pointing to `/etc/apache2/mods-available/*`<br />
* sample for one module other modules equivalent<br />
`$ cd /etc/apache2/mods-enabled`<br />
`$ ln -s ../mods-available/ssl.conf ssl.conf`<br />
* edit 000-default.conf<br />
`$ nano /etc/apache2/sites-available/000-default.conf`<br />
add to config in the appropriate section as follows<br />

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

* edit default-ssl.conf<br />
`$ nano /etc/apache2/sites-available/default-ssl.conf`<br />
add to config in the appropriate section as follows<br />

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
`$ systemctl restart apache2`
