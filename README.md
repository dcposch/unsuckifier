# Unsuckifier

Unsuckifier is a fork of uBlock Origins which enhances the web browsing experience by supporting site specific modifications. This allows for deep modification of web pages, allowing for busting of paywalls and other such nuisances. We currently ship with a small default set of modifications - the "recommended set", which enhances the web browsing experience of the following web pages. We encourage developers to add additional site specific scripts either via pull requests (if you think it should be a default script) or by pressing the submit to add it to the unrestricted repository. Highly upvoted scripts will be considered for default inclusion.

## Included Site specific fixes
None for now - add as they get built

## Build/Installation
Unsuckifier currently only works with Chromium and Chronium based browsers (e.g. Chrome). Build unsuckifier by running the make-chromium.sh script in the tools folder.

## Usage
By default, a set of default scripts are enabled as well as an adblock list taken from uBlock origins. Community curated scripts can be enabled manually- the top 3 high quality (above an upvote threshold) scripts will be shown above the fold.

## TODO
These site specific scripts are high priority and should be developed ASAP


### Wall Street Journal
Use Google user agent to circumvent paywall
### NYTimes, The Economist
Block cookies to circumvent paywall
### NYTimes, Economist, Wikipedia, The Verge
Reader Mode. Clean up CSS
### Facebook
Kill News Feed
Redirect to Events or Activity Log?
### Like Button
Kill tracking
### Other social buttons
Disable COMPLETELY
### File downloading sites (rapidshare/megaupload clones)
Bypass waitwalls / delete "fake download buttons".

### Torrentz.eu
Add direct magnet link buttons

### Mediafire
Go straight to download link
