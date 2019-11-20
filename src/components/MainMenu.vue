<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <h5 class="title is-5">TeslaCam Viewer</h5>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainmenu-nav">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainmenu-nav" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  border-radius: 0;
  background-color: #375a7f;

  a, h5 {
    color: #fff;
  }

  a:hover {
    background-color: #375a7f;
    color: #1abc9c;
  }
}
</style>
