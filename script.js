// Naomi Mauss
// 
// Feb 23, 2024

// fetch("./nmauss_Activity08_MoviesFromJSON22.json")
//     .then(response => response.json())
//     .then(myMovies => loadMovies(myMovies));


// function loadMovies(myMovies) {
//     console.log(myMovies);
//     // Find the element “col” in HTML
//     var CardMovie = document.getElementById("col");

//     var checkboxes = [];
//     var cards = [];



//     // Read every movie from the array
//     // for (var i = 0; i < myMovies.locations.length; i++) {

//         let title = myMovies.locations[myMovies].title;
//         let year = myMovies.locations[myMovies].year;
//         let url = myMovies.locations[myMovies].url;

//         // create a new HTML div division
//         let AddCardMovie = document.createElement("div");

//         // add class = “col” to new division for Bootstrap
//         AddCardMovie.classList.add("col");

//         let checkbox = "checkbox" + i.toString();
//         let card = "card" + i.toString();

//         AddCardMovie.innerHTML = `
//       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <p>lasjdfhlaksjfh</p>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//               <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
//         `;

//         // append new division
//         CardMovie.appendChild(AddCardMovie);

//         let cbox = document.getElementById(checkbox);
//         checkboxes.push(cbox);
//         let ccard = document.getElementById(card);
//         cards.push(ccard);

//     } // end of for

//     checkboxes.forEach((checkboxParam, index) => {
//         console.log(index);
//         checkboxParam.addEventListener('change', () => {
//             if (checkboxParam.checked) {
//                 cards[index].style.display = 'block'; // Show the card
//             } else {
//                 cards[index].style.display = 'none'; // Hide the card
//             }
//         });
//     });
    // }
// } // end of function



// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// function myFunction() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // function updateTime() {
// //     var date = new Date();
// //     var time = date.toLocaleTimeString();

// //     // Set the value of the textbox with id "current-time"
// //     let cl = document.getElementById('current-time').value = time;
// //     current-time.setAttribute("background-color:green;");
// //     // Call requestAnimationFrame again to keep the time updated
// //     requestAnimationFrame(updateTime);
// // }



// // // Start the time updates
// // window.onload = function() {
// //     updateTime();
// // };

// // const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;