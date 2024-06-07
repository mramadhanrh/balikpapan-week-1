function renderSidebar() {
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  sidebarWrapper.innerHTML += `
    <div class="sidebar">
      <a id="btn-center" class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  `;
}
