/*

Full-page view:

https://codepen.io/GeorgePark/full/VXrwOP/

*/

// const posts = document.querySelectorAll('.gallery-item');

// posts.forEach(post => {
// 	post.addEventListener('click', () => {
// 		//Get original image URL
// 		const imgUrl = post.firstElementChild.src.split("?")[0];
// 		//Open image in new tab
// 		window.open(imgUrl, '_blank');
// 	});
// });

const popup = document.getElementById("popup");
const bgcolor = document.getElementById("bgcolor");

function openPopup(){
    popup.classList.add("open-popup");
    bgcolor.classList.add("bg")
}

const deniedpopup = document.getElementById("deniedpopup");

function deniedPopup(){
    deniedpopup.classList.add("open-popup");
    bgcolor.classList.add("bg")
}
