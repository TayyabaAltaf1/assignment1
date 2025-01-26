 // Select all divs
 const parentDiv = document.querySelector('.parent');
 const childDiv = document.querySelector('.child');
 const grandchildDiv = document.querySelector('.grandchild');

 // Event listener for Parent Div
 parentDiv.addEventListener('click', function(event) {
     console.log('Parent Div Clicked');
 });

 // Event listener for Child Div
 childDiv.addEventListener('click', function(event) {
     console.log('Child Div Clicked');
     // Use stopPropagation to stop the event from bubbling up
     event.stopPropagation();
 });

 // Event listener for Grandchild Div
 grandchildDiv.addEventListener('click', function(event) {
     console.log('Grandchild Div Clicked');
 });