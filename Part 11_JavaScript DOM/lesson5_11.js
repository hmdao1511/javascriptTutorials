// 9/8/2022
// Part 11: JavaScript DOM
// Lesson 5: innerHTML, textContent & innerText

// 1. List of important properties and methods
// classList
// getAttribute()
// setAttribute()
// appendChild()
// append()
// prepend()
// removeChild()
// remove()
// createElement
// innterText
// textContent
// innerHTML
// value
// parentElement
// children
// nextSibling
// previousSibling
// style

// 2. innerText attribute
// - It returns the text inside the element being chosen
document.querySelector('p').innerText;
// This returns the text inside the first 'p' tag of the HTML file

// We can also set the text insid the tag by reassigning 
// document.querySelector('p').innerText = 'lolololol';

// 2. textContent attribute
// - It returns the text inside the element being chosen, but it will 
// (might) contain line breaks based on how the source code was written
document.querySelector('p').textContent; // Line breaks based on the code's format

// Difference between innerText and textContent:
// - innerText will not display text that's being hidden by CSS, whereas textContent
// still can do it

// 3. innerHTML attribute
// - This returns everything within the tag specified, it even returns the HTML tags
// inside it too. Just try it to see the difference
document.querySelector('p').innerHTML;

// 4. Reassigning: innerText vs innerHTML
document.querySelector('h1') = '<i>Hello!</i>';
// This will literally make the h1 tag becomes <i>Hello!</i>, which is not what we want

// Instead, we will use innerHTML, because it recognizes the HTML tags
document.querySelector('h1') = '<i>Howdy!</i>';
// This will make the h1 becomes Howdy! with the text being italicized from the <i> tag
