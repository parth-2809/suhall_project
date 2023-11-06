const navli = document.querySelectorAll("div ul li a ");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  var current = "";
  sections.forEach((section) => {
    let sectiontop = section.offsetTop;
    if (scrollY >= sectiontop) {
      current = section.getAttribute("id");
    }
  });

  navli.forEach((li) => {
    li.classList.remove("active");
    document
      .querySelector("div ul li a[href*=" + current + "]")
      .classList.add("active");
  });
});
