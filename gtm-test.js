(() => {
  const buttons = document.querySelectorAll(".buttons button");
  const current = document.querySelector(".current span");
  buttons.forEach((btn) => {
    const keyword = btn.dataset.keyword;
    btn.addEventListener("click", (e) => {
      console.log(keyword);
      const url = new URL(location);
      url.searchParams.set("keyword", keyword);
      history.pushState({}, "", url);
      current.innerText = keyword.toUpperCase();
    });
  });
})();
