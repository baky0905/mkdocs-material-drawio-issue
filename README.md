## Create local Python virtual environment - venv

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Local development server

```bash
mkdocs serve
```

## Path without problem
Navigate to website'a page one in nav bar and you should see a drawio diagram.

## Path with a problem

Enable in `mkdocs.yml`  line with  `#- navigation.instant` by removing a comment.
Go to the landing page in dev server, refresh the site, and navigate to page one, now you will not see the drawio diagram anymore.

So, running it locally:
- Opening the space and then navigating and it doesn't load
- Refresh once on a page and then it loads
- Then subsequent navigation works fine

## More info

Issue and some suggestions:
Plugin issue: https://github.com/onixpro/mkdocs-drawio-file/issues/10
Related issue in the material-theme: https://github.com/squidfunk/mkdocs-material/issues/5816

Recommendations on how to integrate 3rd party js: https://squidfunk.github.io/mkdocs-material/customization/?h=javascr#additional-javascript


Main issue here now is that for mkdocs material instant feature JavaScript doesn't load. General workaround from the mkdocs material people:
```
document$.subscribe(function() {
  console.log("Put your code here") // Executes on `DOMContentLoaded` and on instant navigation
}) 
```
This will then trigger the given JS when instant enabled.


That external JS is assuming it is running on the https://viewer.diagrams.net url, so when it tries to do relative import, it tries to fetch
https://path/math/es5/startup.js
instead of the actual one:
https://viewer.diagrams.net/math/es5/startup.js 

