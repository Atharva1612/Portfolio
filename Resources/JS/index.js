document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const navlogo = document.getElementById('navlogo');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      navbar.classList.add('bg-black','shadow-md');
      navlogo.classList.add('text-white');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-black','shadow-md');
      navlogo.classList.remove('text-white');
      navbar.classList.add('bg-transparent');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const underline = document.getElementById("tabUnderline");
  const contents = document.querySelectorAll(".tab-content");

  function updateUnderline(tab) {
    if (!underline) return;
    const tabRect = tab.getBoundingClientRect();
    const parentRect = tab.parentElement.getBoundingClientRect();
    underline.style.left = `${tabRect.left - parentRect.left}px`;
    underline.style.width = `${tabRect.width}px`;
  }

  function setActiveTab(selectedTab) {
    tabs.forEach(tab => {
      tab.classList.remove("text-white", "font-semibold");
      tab.classList.add("text-gray-400", "font-normal");
    });
    selectedTab.classList.remove("text-gray-400", "font-normal");
    selectedTab.classList.add("text-white", "font-semibold");
  }

  function showContent(targetId) {
    contents.forEach(c => c.classList.add("hidden"));
    const contentToShow = document.getElementById(targetId);
    if (contentToShow) contentToShow.classList.remove("hidden");
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      updateUnderline(tab);
      setActiveTab(tab);
      const targetId = tab.getAttribute("data-target");
      showContent(targetId);
    });
  });

  // Init: Select first tab
  if (tabs.length > 0) {
    updateUnderline(tabs[0]);
    setActiveTab(tabs[0]);
    const firstTarget = tabs[0].getAttribute("data-target");
    showContent(firstTarget);
  }
});