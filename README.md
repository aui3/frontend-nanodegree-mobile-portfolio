<h1>Website Optimization Project</h1>

<h2>Goal</h2>
-Optimize index.html to acheive above 90 score for Page Speed Insight
-Optimize pizza.html (main.js) to acheive a 60 FPS reading

<b>The optimized site can be accessed at this link:</b> 

http://aui3.github.io/frontend-nanodegree-mobile-portfolio/app/dist/

<b>The developer's files are avaiable at:</b>

https://github.com/aui3/frontend-nanodegree-mobile-portfolio/tree/master/app

<h2>Project folder Hierarchy</h2>

-All the project source files are inside the <b>app</b> folder. 

-<b>dist</b>(found inside the app folder) has the production (optimized) files.

<h2>Overview</h2>

I am using Gulp build tools and Data URI conversions to acheive content efficiency.

Optimizations:

-<b>index.html</b>

-Separating style sheets based of media type. Make style sheet of media type "print" render unblocking by adding media="print" while linking to print.css

- Add 'async' attributes to scripts that need not be render-blocking (i.e. load these scripts after the initial page load) [analytics.js and perfmatters.js]. I removed the inline <script></script> tags from index.html and put the render blodking js code in analytics.js and used 'async' atrribute to ensure this script does not render blocking.

- Inline styles to reduce the number of critical resources. I used gulp <em>uncss</em> plugin to remove styles from style.css that were not used in index.html. Then I copied all the remaining styles and inlined them in index.html inside the <style></style> tags
 
-<b>main.js</b>
