<template>
  <div id="app">
    <div id="nav">
      <b-container>
        <b-navbar toggleable>
          <b-navbar-toggle target="links" />
          <b-navbar-nav>
            <b-navbar-brand>
              <img src="assets/icons/logo.svg" class="logoNavbar">
            </b-navbar-brand>
          </b-navbar-nav>
          <b-collapse is-nav id="navBarSite">
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/" exact> HOME </b-nav-item>
              <b-nav-item to="/about" exact> ABOUT US </b-nav-item>
              <b-nav-item to="/newProfessional" exact> FORM PROF </b-nav-item>
              <b-nav-item-dropdown text="Categories" right>
                <b-dropdown-item to="/wholeness">
                  Wholeness
                </b-dropdown-item>
                <b-dropdown-item to="/Performance">
                  Performance Perfection
                </b-dropdown-item>
                <b-dropdown-item to="/Body">
                  Love Your Body
                </b-dropdown-item>
                <b-dropdown-item to="/Mind">
                  A Beautiful Mind
                </b-dropdown-item>
                <b-dropdown-item to="/Serenity">
                  Serenity
                </b-dropdown-item>
                <b-dropdown-item to="/Strength">
                  Personal Strength and Power
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <!-- <b-nav-item to="/Profile" /> -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
    <router-view class="view"/>
  </div>
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
}

#nav {
  padding: 30px 30px 0 30px;

}

.view {
  margin-top: -90px;
}

#nav a {
  font-weight: bold;
  color: #FDBA31;
  padding-left: 15px;
  padding-right: 15px;
}

#nav a.active {
border-bottom: 1.5px solid #FDBA31;
}

.logoNavbar {
  width: 100px;
}
</style>
