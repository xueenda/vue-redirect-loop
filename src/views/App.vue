<template>
  <div class="container js_container">
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition="slide">
      <ii-header></ii-header>
    </router-view>
  </div>
</template>

<style lang="less">

html, body {
    height: 100%;
    -webkit-tap-highlight-color: transparent;
}

body, .page {
    background-color: #FBF9FE;
}

.container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}

.page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 55px;
    left: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

.hd {
    padding: 2em 0;
}

.page_desc {
    text-align: center;
    color: #888;
    font-size: 14px;
}

.bd.spacing {
    padding: 0 15px;
}

.page_title {
    text-align: center;
    font-size: 34px;
    color: #3CC51F;
    font-weight: 400;
    margin: 0 15%;
}

// index
.global_navs {
    background-color: transparent;
    &:before, &:after {
        border-color: #D9DBDA;
    }
    .cell {
        padding-top: .5em;
        padding-bottom: .5em;
        &:before {
            border-color: #D9DBDA;
        }

    }
    .icon_nav {
        width: 28px;
        height: 28px;
        display: block;
        margin-right: .7em;
    }
}

// button
.page {
    &.button {
        .page_title {
            color: #225FBA;
        }
        .bd {
            padding: 0 15px;
        }
        .button_sp_area {
            padding: 10px 0;
            width: 60%;
            margin: 0 auto;
            text-align: justify;
            text-justify: distribute-all-lines; /*ie6-9*/
            //text-align-last:justify;/* ie9*/
            //-moz-text-align-last:justify;/*ff*/
            //-webkit-text-align-last:justify;/*chrome 20+*/

            font-size: 0;
            &:after {
                display: inline-block;
                width: 100%;
                height: 0;
                font-size: 0;
                margin: 0;
                padding: 0;
                overflow: hidden;
                content: ".";
            }
        }
    }
}

// table view
.page {
    &.cell {
        .page_title {
            color: #225FBA;
        }
        .bd {
            padding-bottom: 30px;
        }
    }
}

// toast
.page {
    &.toast {
        background-color: #FFFFFF;
        .bd {
            padding: 120px 15px 0;
        }
    }
}

// dialog
.page {
    &.dialog {
        background-color: #FFFFFF;
        .bd {
            padding: 120px 15px 0;
        }
    }
}

// msg page
.page {
    &.msg {
        background-color: #FFFFFF;
    }
}

// article page
.page {
    &.article {
        background-color: #FFFFFF;
        .page_title {
            color: #DE7C23;
        }
    }
}

// icons
.page {
    &.icons {
        background-color: #FFFFFF;
        text-align: center;
        .page_title {
            color: #3E24BD;
        }
        .bd {
            padding: 30px 0;
            text-align: center;
        }
        .icon_sp_area {
            padding: 10px 20px;
            text-align: left;
        }
        i {
            margin: 0 5px 10px;
        }
    }
}

@keyframes slideIn {
    from {
        transform: translate3d(100%, 0, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideOut {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(100%, 0, 0);
    }
}

.page.slideIn {
    animation: slideIn .2s forwards;
}

.page.slideOut {
    animation: slideOut .2s forwards;
}



body {
  overflow-x: hidden;
}

.slide-transition {
  transition: left 0.3s ease;
  width: 100%;
}

.slide-enter, .slide-leave {
  left: 100%;
}

.slide-leave {
  left: 100%;
}

.app-transition {
  transition: opacity 0.3s ease;
}

.app-enter, .app-leave {
  opacity: 0;
}

</style>
