// function scope for blogSection
function blogSection() {
  const blogsecTitle = document.querySelector("#blogsec_title");
  
  // when scroll the window => if blogsecTitle between 10 and -200 px, add active-title, if not remove active-title
  function onScroll() {
    const blogsecTitleLocation = blogsecTitle.getBoundingClientRect();
    if (blogsecTitleLocation.top <= 10 && blogsecTitleLocation.bottom >= -200) {
      blogsecTitle.classList.add("active-title");
    } else {
      blogsecTitle.classList.remove("active-title");
    }
  } window.addEventListener("scroll", onScroll);
} blogSection();


// function scope for postSection
function postSection() {
  const postsecTitle = document.querySelector("#postsec_title");
  
  // when scroll the window => if postsecTitle between 40 and -200 px, add active-title, if not remove active-title
  function onScroll() {
    const postsecTitleLocation = postsecTitle.getBoundingClientRect();
    if (postsecTitleLocation.top <= 40 && postsecTitleLocation.bottom >= -200) {
      postsecTitle.classList.add("active-title");
    } else {
      postsecTitle.classList.remove("active-title");
    }
  } window.addEventListener("scroll", onScroll);
} postSection();
