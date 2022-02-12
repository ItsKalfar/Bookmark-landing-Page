let menu = document.getElementById("menu");

function openNav() {
  menu.classList.add("open");
}
function closeNav() {
  menu.classList.remove("open");
}

const tabOne = document.getElementById("tabOne");
const tabTwo = document.getElementById("tabTwo");
const tabThree = document.getElementById("tabThree");

const tabImg = document.querySelector(".tab_img");
const tabHeading = document.querySelector(".tab_heading");
const tabText = document.querySelector(".tab_text");

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

tabOne.addEventListener("click", () => {
  tabTwo.classList.remove("active");
  tabThree.classList.remove("active");
  tabOne.classList.add("active");

  tab2.classList.remove("active");
  tab3.classList.remove("active");
  tab1.classList.add("active");

  tabImg.src = "./images/illustration-features-tab-1.svg";

  tabHeading.innerText = `Bookmark in one click`;
  tabText.innerText = `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`;
});

tabTwo.addEventListener("click", () => {
  tabTwo.classList.add("active");
  tabOne.classList.remove("active");
  tabThree.classList.remove("active");

  tab2.classList.add("active");
  tab1.classList.remove("active");
  tab3.classList.remove("active");

  tabImg.src = "./images/illustration-features-tab-2.svg";

  tabHeading.innerText = `Intelligent search`;
  tabText.innerText = `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`;
});

tabThree.addEventListener("click", () => {
  tabOne.classList.remove("active");
  tabTwo.classList.remove("active");
  tabThree.classList.add("active");

  tab1.classList.remove("active");
  tab2.classList.remove("active");
  tab3.classList.add("active");

  tabImg.src = "./images/illustration-features-tab-3.svg";

  tabHeading.innerText = `Share your bookmarks`;
  tabText.innerText = `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`;
});

const faqs = document.querySelectorAll(".question_answer");

faqs.forEach((faq) => [
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  }),
]);
