const content = document.getElementById('scrollingContent');
console.log(content);
const items = document.querySelectorAll('.item');
console.log(items);
let itemWidth = items.offsetWidth + 10; // Including margin
console.log('hola');

const wrapper = document.querySelector('.scrolling-wrapper');

// function checkVisibility() {
//   items.forEach((item) => {
//     // Get the bounding rectangle of the item relative to the viewport
//     const rect = item.getBoundingClientRect();
//     // Get the bounding rectangle of the wrapper
//     const wrapperRect = wrapper.getBoundingClientRect();

//     // Check if the item is out of the visible area of the wrapper
//     if (rect.right < wrapperRect.left || rect.left > wrapperRect.right) {
//       console.log(`${item.textContent} is out of view.`);
//     } else {
//       console.log(`${item.textContent} is in view.`);
//     }
//   });

//   // Check again on the next animation frame
//   requestAnimationFrame(checkVisibility);
// }

// // Start checking visibility
// requestAnimationFrame(checkVisibility);

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (!entry.isIntersecting) {
//         console.log(`${entry.target.textContent} has fully left the view.`);
//         content.appendChild(content.firstElementChild);
//       }
//     });
//   },
//   {
//     root: wrapper, // Use the scrolling wrapper as the viewport
//     threshold: 0, // Trigger when the item is completely out of view
//   },
// );

// // Observe each item
// items.forEach((item) => {
//   observer.observe(item);
// });
