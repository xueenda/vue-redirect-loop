<template>
  <div class="weui_tabbar">
    <a v-link="{ path: '/page1', activeClass: 'weui_bar_item_on' }" class="weui_tabbar_item weui_bar_item_on">
      <div class="weui_tabbar_icon">
        <img src="../images/icon_nav_button.png" alt="">
      </div>
      <p class="weui_tabbar_label">Page 1</p>
    </a>
    <a v-link="{ path: '/page2', activeClass: 'weui_bar_item_on' }" class="weui_tabbar_item">
      <div class="weui_tabbar_icon">
        <img src="../images/icon_nav_msg.png" alt="">
      </div>
      <p class="weui_tabbar_label">Page 2</p>
    </a>
  </div>
</template>
