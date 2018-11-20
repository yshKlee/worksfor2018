<template>
  <div class="hardicons">
    <i class="myicon icon_ishard"></i>
    <i class="myicon icon_ishard"></i>
    <i class="myicon icon_unhard"></i>
    <i class="myicon icon_unhard"></i>
    <i class="myicon icon_unhard"></i>
  </div>
</template>

<script>
export default {
  name: 'hardLevel'
}
</script>

<style scoped>
.icon_ishard {
  width: 0.12rem;
  height: 0.12rem;
}

.icon_ishard:before {
  background-image: url(../../assets/teach_icon@2x.png);
}

.icon_unhard {
  width: 0.12rem;
  height: 0.12rem;
}

.icon_unhard:before {
  background-image: url(../../assets/teach_icon_star_lightcopy@2x.png);
}

.hardicons {
  display: inline-block;
}
</style>
