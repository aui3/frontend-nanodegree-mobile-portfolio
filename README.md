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

<h3>Overview</h3>

I am using Gulp build tools and Data URI conversions to acheive content efficiency.

<h3>Optimizations:</h3>

-<b>Content Efficiency Optimizations</b>

I am using gulp to acheive content efficiency. In the gulpfile.js located in the <em>'app'</em> I have used the following plugins:
 -gulp-uglify: To uglify all the script files
 -gulp-minify-css : To minify all style files
 -gulp-image-optimization : For image optimization
 -gulp-minify-html : Minify Html files
 - The default gulp task includes all the above plugins
 -gulp-uncss : Used once, (not as part of default task) to remove extra styles from bootstrap and style.css that are not used in the html files. 

-<b>index.html</b>

-Separating style sheets based of media type. Make style sheet of media type "print" render unblocking by adding media="print" while linking to print.css

- Add 'async' attributes to scripts that need not be render-blocking (i.e. load these scripts after the initial page load) [analytics.js and perfmatters.js]. I removed the inline <script></script> tags from index.html and put the render blodking js code in analytics.js and used 'async' atrribute to ensure this script does not render blocking.

- Inline styles to reduce the number of critical resources. I used gulp <em>uncss</em> plugin to remove styles from style.css that were not used in index.html. Then I copied all the remaining styles and inlined them in index.html inside the <style></style> tags

-Date URI Conversion. I have used Data URI coversion to optimize pizzeria.jpg. Image data is represented as a string and embedded directly in the index.html.

-<b>main.js</b>

 -One:  &nbsp;&nbsp;&nbsp;The first optimization I made is at var <em>pizzaElementGenerator = function(i) {…}</em>, line 366 where instead of returning a DOM   element, the function returns a document fragment. appendChild(..) calls to the DOM are replaced with appendChild(…) to the document fragment thus avoiding expensive DOM manipulations

 -Two:  &nbsp;&nbsp;&nbsp;Line 425 In <em>resizePizzas(size)</em>, use getElementsById instead of the expensive querySelector DOM manipulation calls.

 -Three:  &nbsp;&nbsp;&nbsp;<em>changePizzaSizes()</em> Line(479) move repeating calculations from out side the for loop and replace theree querySelectorAll() calls with just one getElementsById call and saving it in a variable PizzaCon

 -Four: &nbsp;&nbsp;&nbsp;Line 504, move the generation of all pizza till after the DOM completion event to optimize page load time. Further optimize this by using a Document Fragment and appending all the random pizzas to a fragment and outside the for loop in just one DOM manipulation append the fragment to the DOM. Also move the calculation of pizzDiv outside the for loop since it is unnecessarily repeated.

 -Five: &nbsp;&nbsp;&nbsp; In function <em>updatePositions()</em>, line 539, put the variable ‘items’ in global scope because this will be used every time a scroll is made and it will store all elements with class ‘mover’. Using transfor:translate instead of style.left which is a more expensive DOM manipulation method.

 -Six: &nbsp;&nbsp;&nbsp;Line 577, use a Document Fragment to append all the pizza elements to this fragment first and then attach the fragment to the DOM. Also, based upon the location of the pizzas, if they are visible on the screen, only then add them to the fragment to display them.
 
 
 <h2>References </h2>
 
 -http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Gulp
 
 -https://www.youtube.com/playlist?list=PLLnpHn493BHE2RsdyUNpbiVn-cfuV7Fos

 -https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

 -http://duri.me/
 
 -https://developers.google.com/web/fundamentals/performance/
 
-https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function


<b> Honor Code:</b>
 
 I hereby confirm that this submission is my work. I have cited above the origins of any parts of the submission that were taken from Websites, books, forums, blog posts, github repositories, etc. By including this in my email, I understand that I will be expected to explain my work in a video call with a Udacity coach before I can receive my verified certificate.”


