function toggleChange(checkbox) {
      const checkboxData = [
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
      ];
    
    
      const boxContainer = document.getElementById("boxContainer");
    
      function createBox(data, index) {
        const box = document.createElement("div");
        box.id = `box${index + 1}`;
        box.className = "box";
        box.innerHTML = `
          <h6>${data.planName}</h6>
          <p>${data.companyName}</p>
          <p class="price">Total: ${data.totalPrice}.00</p>
          <i class="fa-solid fa-xmark close-box" onclick="removeBox(${index})"></i>
        `;
        return box;
      }
    
      function addBoxToContainer(box) {
        boxContainer.querySelector(".popup-content").appendChild(box);
        boxContainer.style.display = "flex";
      }
    
      function removeBox(index) {
        const box = document.getElementById(`box${index + 1}`);
        box.remove();
        checkboxData.splice(index, 1);
        if (boxContainer.querySelectorAll(".box").length === 0) {
          boxContainer.style.display = "none";
        }
      }
    
      const checkboxId = checkbox.id;
      const isChecked = checkbox.checked;
      const index = parseInt(checkboxId.replace("toggleBox", "")) - 1;
    
      if (isChecked) {
        const boxCount = boxContainer.querySelectorAll(".box").length;
        if (boxCount < 3) {
          const data = checkboxData[index];
          const box = createBox(data, index);
          addBoxToContainer(box);
        } else {
          alert("You can compare a maximum of 3 cards.");
          checkbox.checked = false;
        }
      } else {
        removeBox(index);
      }
    }
    

//       let close = document.querySelector("#close-box");
//       close.addBoxToContainer("click" ,removeBox(index){
//         // ... (previous code)
//         const boxContainer = document.getElementById("boxContainer");

//   const box = document.getElementById(`box${index + 1}`);
//   const checkbox = document.getElementById(`toggleBox${index + 1}`);
  
//   box.remove();
//   checkbox.checked = !checkbox.checked; // Toggle checkbox state
//   checkboxData.splice(index, 1);
  
//   if (boxContainer.querySelectorAll(".box").length === 0) {
//       boxContainer.style.display = "none";
// }

// ... (remaining code)



// *****
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


