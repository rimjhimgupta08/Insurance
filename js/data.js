const checkboxdata = [
      {
            planName: "Silver Plan",
            companyName: "Tata AIA",
            totalPrice: 1280
      },
      {
            planName: "Travel Elite Silver Plan",
            companyName: "Max Life",
            totalPrice: 55000
      },
      {
            planName: "Travel Companion Care Plan",
            companyName: "Niva",
            totalPrice: 55000
      },
      {
            planName: "Travel care",
            companyName: "Tata AIA",
            totalPrice: 918
      },
      {
            planName: "Silver Plan",
            companyName: "Tata",
            totalPrice: 780
      }
]


// *******


// ******
 


document.addEventListener("DOMContentLoaded", function() {
      const toggleBox1 = document.getElementById("toggleBox1");
      const toggleBox2 = document.getElementById("toggleBox2");
      const toggleBox3 = document.getElementById("toggleBox3");
      const toggleBox4 = document.getElementById("toggleBox4");
      const toggleBox5 = document.getElementById("toggleBox5");

//       const boxContainer = document.getElementById("boxContainer");
//     //   if(boxContainer == 0){
//     //     boxContainer.style.display = "none";
//     //   }else{
//     //     boxContainer.style.display = "block";
//     //   }
  
      function createBox1() {
          const box = document.createElement("div");
          box.className = "box";
          box.innerHTML = `
              <h6>${checkboxdata[0].planName}</h6>
              <p>${checkboxdata[0].companyName}</p>
              <p class="price">Total: ${checkboxdata[0].totalPrice}.00</p> 
              <i class="fa-solid fa-xmark" id="close"></i>
          `;
          return box;
        // boxContainer.appendChild(box);
        // boxContainer.style.display = "block"; // Show boxContaine
      }
      function createBox2() {
        const box1 = document.createElement("div");
        box1.className = "box1";
        box1.innerHTML = `
            <h6>${checkboxdata[1].planName}</h6>
            <p>${checkboxdata[1].companyName}</p>
            <p class="price">Total: ${checkboxdata[1].totalPrice}.00</p> 
            <i class="fa-solid fa-xmark" id="close1"></i>
        `;
        return box1;
        // boxContainer.appendChild(box);
        // boxContainer.style.display = "block"; // Show boxContaine
    }
    function createBox3() {
        const box2 = document.createElement("div");
        box2.className = "box2";
        box2.innerHTML = `
            <h6>${checkboxdata[2].planName}</h6>
            <p>${checkboxdata[2].companyName}</p>
            <p class="price">Total: ${checkboxdata[2].totalPrice}.00</p> 
            <i class="fa-solid fa-xmark" id="close2"></i>
        `;
        return box2;
        // boxContainer.appendChild(box);
        // boxContainer.style.display = "block"; // Show boxContaine
    }
    function createBox4() {
        const box3 = document.createElement("div");
        box3.className = "box3";
        box3.innerHTML = `
            <h6>${checkboxdata[3].planName}</h6>
            <p>${checkboxdata[3].companyName}</p>
            <p class="price">Total: ${checkboxdata[3].totalPrice}.00</p> 
            <i class="fa-solid fa-xmark" id="close3"></i>
        `;
        return box3;
        // boxContainer.appendChild(box);
        // boxContainer.style.display = "block"; // Show boxContaine
    }
    function createBox5() {
        const box4 = document.createElement("div");
        box4.className = "box4";
        box4.innerHTML = `
            <h6>${checkboxdata[4].planName}</h6>
            <p>${checkboxdata[4].companyName}</p>
            <p class="price">Total: ${checkboxdata[4].totalPrice}.00</p> 
            <i class="fa-solid fa-xmark" id="close4"></i>
        `;
        // boxContainer.appendChild(box);
        // boxContainer.style.display = "block"; // Show boxContaine
        return box4;
    }

      function addBoxToContainer(box) {
        
          boxContainer.appendChild(box);
          boxContainer.style.display = "flex";
          count();
      }
  
      function addBoxToContainer(box1) {
        
        boxContainer.appendChild(box1);
        boxContainer.style.display = "flex";
        count();

    }
    function addBoxToContainer(box2) {
        
        boxContainer.appendChild(box2);
        boxContainer.style.display = "flex";
        count();

    }
    function addBoxToContainer(box3) {
        
        boxContainer.appendChild(box3);
        boxContainer.style.display = "flex";
        count();

    }function addBoxToContainer(box4) {
        
        boxContainer.appendChild(box4);
        boxContainer.style.display = "flex";
        count();

    }
      function removeBoxFromContainer(box) {
        // if (boxContainer.childElementCount === 0) {
        //     boxContainer.style.display = "none";
        // }
          box.remove();
          
          
      }
      function removeBoxFromContainer(box1) {
        // if (boxContainer.childElementCount === 0) {
        //     boxContainer.style.display = "none";
        // }
          box1.remove();
          
    
          
      }function removeBoxFromContainer(box2) {
        // if (boxContainer.childElementCount === 0) {
        //     boxContainer.style.display = "none";
        // }
          box2.remove();
        //   if (boxContainer.childElementCount === 0) {
        //     boxContainer.style.display = "none";
        // }
          
      }function removeBoxFromContainer(box3) {
        // if (boxContainer.childElementCount === 0) {
        //     boxContainer.style.display = "none";
        // }
          box3.remove();
          
          
      }function removeBoxFromContainer(box4) {
        // if (boxContainer.childElementCount === 0) {
        //     boxContainer.style.display = "none";
        // }
          box4.remove();
          
          
      }
      
  
      toggleBox1.addEventListener("change", function() {
          if (toggleBox1.checked) {
              const box = createBox1();
            // createBox1();
              addBoxToContainer(box);
            //   handleToggleBox(toggleBox1);
          } else {
              const box = boxContainer.querySelector(".box");
            // removeBox();
              removeBoxFromContainer(box);
          }
          
      });
  
      toggleBox2.addEventListener("change" ,function() {
          if (toggleBox2.checked) {
              const box1 = createBox2();
            // createBox2();
              addBoxToContainer(box1);
            //   handleToggleBox1(toggleBox2);
          } else {
              const box1 = boxContainer.querySelector(".box1");
              removeBoxFromContainer(box1);
            // removeBox();

          }
          
      });
  
      toggleBox3.addEventListener("change", function() {
          if (toggleBox3.checked) {
              const box2 = createBox3();
              addBoxToContainer(box2);
            //   handleToggleBox2(toggleBox3);

            // createBox3();
          } else {
              const box2 = boxContainer.querySelector(".box2");
              removeBoxFromContainer(box2);
            // removeBox();
          }
          
      });
      toggleBox4.addEventListener("change" ,function() {
        if (toggleBox4.checked) {
            const box3 = createBox4();
            addBoxToContainer(box3);
            // handleToggleBox3(toggleBox4);
        } else {
            const box3 = boxContainer.querySelector(".box3");
            removeBoxFromContainer(box3);
        }
        

    });
    toggleBox5.addEventListener("change" ,function() {
        if (toggleBox5.checked) {
            const box4 = createBox5();
            addBoxToContainer(box4);
            // handleToggleBox4(toggleBox5);
            // createBox5();
        } else {
            const box4 = boxContainer.querySelector(".box4");
            removeBoxFromContainer(box4);
            // removeBox();
        }
        

    });
    

  });

  function count(){
    if(boxContainer.length == 3){
      alert("Maximum 3 policy select");

    }
  }
  

// Click function start here all...
  document.querySelector("#close-box").addEventListener("click", function () {
      
    document.querySelector(".popup").style.display = "none";

    // })
    
  })

  // document.querySelector("#close2").addEventListener("click", function () {
  //   document.querySelector(".box2").style.display = "none";
  // })

  document.querySelector("#box").addEventListener("click", function () {
    document.querySelector("#mouse").style.display = "flex";
  })

  document.querySelector("#buttons").addEventListener("click", function () {
    document.querySelector(".quote").style.display = "flex";
  })

  document.querySelector("#close-quote").addEventListener("click", function () {
    document.querySelector(".quote").style.display = "none";
  })

  document.querySelector("#close-filter").addEventListener("click", function () {
    document.querySelector("#mouse").style.display = "none";
  })

  const selectbtn = document.querySelector(".drop-btn");
  const items = document.querySelectorAll(".item");
  selectbtn.addEventListener("click", () => {
    selectbtn.classList.toggle("open");
  })
  items.forEach(item =>{
    item.addEventListener("click", ()=>{
      item.classList.toggle("checked");
    })
  })

  const innerdrop = document.querySelector(".inner-drop");
  const dropitems = document.querySelectorAll(".drop-item");
  innerdrop.addEventListener("click", () =>{
    innerdrop.classList.toggle("open");
  })

  // const checkbox = document.querySelectorAll(".checkbox");
  // checkbox.forEach(check =>{
  //   check.addEventListener("click", () => {
  //   check.classList.toggle("checked");

  // })
  // })
  
  
//   let boxCount = 0;
// //   console.log(createBox);
// //   **(****)
// function handleToggleBox(checkbox) {
//     if (checkbox.checked && boxCount < 3) {
//         // createBox();
//         addBoxToContainer(box)
//         boxCount++;
//     } else if (!checkbox.checked) {
//         removeBoxFromContainer(box);
//         boxCount--;
//     } else {
//         alert("You can only add a maximum of 3 boxes!");
//         checkbox.checked = false;
//     }
// }
// function handleToggleBox1(checkbox) {
//     if (checkbox.checked && boxCount < 3) {
//         // createBox1();
//         addBoxToContainer(box1)
//         boxCount++;
//     } else if (!checkbox.checked) {
//         removeBoxFromContainer(box1);
//         boxCount--;
//     } else {
//         alert("You can only add a maximum of 3 boxes!");
//         checkbox.checked = false;
//     }
// }
// function handleToggleBox2(checkbox) {
//     if (checkbox.checked && boxCount < 3) {
//         // createBox2();
//         addBoxToContainer(box2)
//         boxCount++;
//     } else if (!checkbox.checked) {
//         removeBoxFromContainer(box2);
//         boxCount--;
//     } else {
//         alert("You can only add a maximum of 3 boxes!");
//         checkbox.checked = false;
//     }
// }
// function handleToggleBox3(checkbox) {
//     if (checkbox.checked && boxCount < 3) {
//         // createBox3();
//         addBoxToContainer(box3)
//         boxCount++;
//     } else if (!checkbox.checked) {
//         removeBoxFromContainer(box3);
//         boxCount--;
//     } else {
//         alert("You can only add a maximum of 3 boxes!");
//         checkbox.checked = false;
//     }
// }
// function handleToggleBox4(checkbox) {
//     if (checkbox.checked && boxCount < 3) {
//         // createBox4();
//         addBoxToContainer(box4)
//         boxCount++;
//     } else if (!checkbox.checked) {
//         removeBoxFromContainer(box4);
//         boxCount--;
//     } else {
//         alert("You can only add a maximum of 3 boxes!");
//         checkbox.checked = false;
//     }
// }



// document.addEventListener("DOMContentLoaded", function() {
//     const toggleBox1 = document.getElementById("toggleBox1");
//     const toggleBox2 = document.getElementById("toggleBox2");
//     const toggleBox3 = document.getElementById("toggleBox3");
//     const toggleBox4 = document.getElementById("toggleBox4");
//     const toggleBox5 = document.getElementById("toggleBox5");

//     const boxContainer = document.getElementById("boxContainer");

//     toggleBox1.addEventListener("change", function() {
//         if (toggleBox1.checked) {
//             createBox1(`${checkboxdata[0].companyName}`);
//         } else {
//             removeBox(`${checkboxdata[0].companyName}`);
//         }
//     });

//     toggleBox2.addEventListener("change", function() {
//         if (toggleBox2.checked) {
//             createBox2(`${checkboxdata[1].companyName}`);
//         } else {
//             removeBox(`${checkboxdata[1].companyName}`);
//         }
//     });

//     toggleBox3.addEventListener("change", function() {
//         if (toggleBox3.checked) {
//             createBox3(`${checkboxdata[2].companyName}`);
//         } else {
//             removeBox(`${checkboxdata[2].companyName}`);
//         }
//     });
//     toggleBox4.addEventListener("change", function() {
//         if (toggleBox4.checked) {
//             createBox4(`${checkboxdata[3].companyName}`);
//         } else {
//             removeBox(`${checkboxdata[3].companyName}`);
//         }
//     });
//     toggleBox5.addEventListener("change", function() {
//         if (toggleBox5.checked) {
//             createBox5(`${checkboxdata[4].companyName}`);
//         } else {
//             removeBox(`${checkboxdata[4].companyName}`);
//         }
//     });

//     function createBox1(content) {
//         const box = document.createElement("div");
//         box.className = "box";
//         box.innerHTML = `
//             <h6>Explore Europe</h6>
//             <p>${content}</p>
//             <p class="price">${checkboxdata[0].totalPrice}.00</p> 
//             <i class="fa-solid fa-xmark" id="close"></i>
//         `;
//         boxContainer.appendChild(box);
//         boxContainer.style.display = "flex"; // Show boxContainer
//     }
//     function createBox2(content) {
//         const box = document.createElement("div");
//         box.className = "box";
//         box.innerHTML = `
//             <h6>Travel Elite Silver Plan</h6>
//             <p>${content}</p>
//             <p class="price">Total: ${checkboxdata[1].totalPrice}.00</p> 
//             <i class="fa-solid fa-xmark" id="close"></i>
//         `;
//         // return box;
//         boxContainer.appendChild(box);
//         boxContainer.style.display = "flex"; // Show boxContaine
//     }
//     function createBox3(content) {
//         const box = document.createElement("div");
//         box.className = "box";
//         box.innerHTML = `
//             <h6>Travel Elite Silver Plan</h6>
//             <p>${content}</p>
//             <p class="price">Total: ${checkboxdata[2].totalPrice}.00</p> 
//             <i class="fa-solid fa-xmark" id="close"></i>
//         `;
//         // return box;
//         boxContainer.appendChild(box);
//         boxContainer.style.display = "flex"; // Show boxContaine
//     }
//     function createBox4(content) {
//         const box = document.createElement("div");
//         box.className = "box";
//         box.innerHTML = `
//             <h6>Travel Elite Silver Plan</h6>
//             <p>${content}</p>
//             <p class="price">Total: ${checkboxdata[3].totalPrice}.00</p> 
//             <i class="fa-solid fa-xmark" id="close"></i>
//         `;
//         // return box;
//         boxContainer.appendChild(box);
//         boxContainer.style.display = "flex"; // Show boxContaine
//     }
//     function createBox5(content) {
//         const box = document.createElement("div");
//         box.className = "box";
//         box.innerHTML = `
//             <h6>Travel Elite Silver Plan</h6>
//             <p>${content}</p>
//             <p class="price">Total: ${checkboxdata[4].totalPrice}.00</p> 
//             <i class="fa-solid fa-xmark" id="close"></i>
//         `;
//         // return box;
//         boxContainer.appendChild(box);
//         boxContainer.style.display = "flex"; // Show boxContaine
//     }


//     function removeBox(content) {
//         const boxes = document.querySelectorAll(".box");
//         boxes.forEach(function(box) {
//             if (box.textContent.includes(content)) {
//                 box.remove();
//             }
//         });
        

//         // Hide boxContainer if it's empty
//         // if (box.childElementCount === 0) {
//         //     boxContainer.style.display = "none";
//         // }
//         // if( boxContainer.style.display == "block"){
//         //     boxContainer.style.display = "none";
//         // }
//     }
// });




// // module.exports = {
// //       checkboxdata
// // }
