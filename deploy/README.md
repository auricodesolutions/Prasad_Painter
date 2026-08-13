# Nginx deployment

Upload the contents of `dist` to the document root for
`prasadweerasinghe.auricodesolutions.com`.

The existing Nginx `server` block must use the location blocks from
`nginx-spa.conf`. Replace its current `location /` block rather than adding
a duplicate. Every client-side route must fall back to the application
entry point:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

Test and reload Nginx after updating the site configuration:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Test these URLs directly after the reload:

- `/about/`
- `/contact/`
- `/store/`
- `/store/architecture-of-memory/`
- `/category/paintings/`
- `/category/drawings/`
- `/category/commercial/`
- `/category/sculptures/`
- `/set-design/`
- `/art-direction/`
