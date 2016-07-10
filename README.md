# Unsuckifier

Unsuckifier is a fork of uBlock Origins that enhances your web browsing experience by going beyond blocking ads. It supports deep modification of web pages to simplify, remove distractions, skip paywalls, and make your browsing experience smoother and more fun.

We currently ship with a small default set of modifications, to enhances the web browsing experience on a number of popular web pages. We encourage developers to add additional site specific scripts. Send us a pull request! Each improvement can be turned on or off easily to get the stock (unmodified) website back.

We think browsers are called a User Agent because the user should choose what the web looks like for them. We hope you'll enjoy a cleaner, more focused web.

WARNING: EARLY ALPHA. Unsuckifier is a hackathon project and a work in progress!

## Development instructions

Unsuckifier currently only works with Chrome & Chromium. Build unsuckifier by running `./tools/make-chromium.sh`.

In Chrome, go to Extensions, enable Developer Mode, click Load Unpacked Extension, and navigate to `unsuckifier/dist/build/Unsuckifier.chromium`. Happy hacking!

## Site Improvements

Each of these can be turned on and off from the Unsuckifier menu.

### NYTimes, Economist, Wikipedia, The Verge
Reader Mode. Clean up CSS

### Wall Street Journal
Spoof Referer header to skip nag screen.

### NYTimes, The Economist
Block cookies to skip paywall.

## Future Site Improvements

We're still working on these.

### Facebook
Skip News Feed and take you directly to Events, to help you stay focused.

### Social buttons
Prevent Like button tracking. No requests to Facebook from third-party sites until you actually click the button.

Other "share" buttons will be deleted entirely.
