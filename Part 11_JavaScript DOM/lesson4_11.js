// 9/8/2022
// Part 11: JavaScript DOM
// Lesson 4: querySelector & querySelectorAll

// 1. querySelector()
// - It's a newer, all-in-one method to select a single element 
// - It can select id, class and tag name
// - It returns the first tag it encounters for the input argument
// - For its argument:
//      + Input the tag name if you want to get the tag's info
//      + Input # followed by the name of the id if you want to get the 
// element with that id
//      + Input . followed by the name of the class if you want to get the 
// element with that class

// Example (go into test-files and go into index.html):
document.querySelector('p');
// Notice that it only returns the first 'p' tag in index.html, compared
// to document.getElementsByTagName(), which returns an HTMLCollection 
// containing all 'p' tags in index.html
document.querySelector('#banner');
// This returns the first tag with the id 'banner'
document.querySelector('.square');
// This returns the first tag with the class 'square'

// 2. Selecting the right tag for class
// - Because a class will be used by multiple tags, in order to get
// the right one, you have to use :nth-of-type(indexNumber) 
// - NOTE: The index number of nth-of-type() starts at 1
document.querySelector('img:nth-of-type(2)'); 
// This returns the second img tag of the HTML file

// 3. Select a tag with an attribute
// - You use the [] (squared brackets) and the attribute inside those brackets
document.querySelector('a[title="Java"]'); 
// This returns the 'a' tag that has the title "Java"

// 4. querySelectorAll()
// - This works similarly to querySelector(), but this instead returns a NodeList
// containing all HTML elements being called out in that parentheses
document.querySelectorAll('img');
// This returns a NodeList of 'img' tags

// You can also find the children elements inside another element like this:
document.querySelectorAll('p a');
// This returns a NodeList of 'a' tags which lies within the 'p' tag

// 5. Playing with JS code
const allLinks = document.querySelectorAll('p a');
for (let link of allLinks) {
    console.log(link.href);
}



