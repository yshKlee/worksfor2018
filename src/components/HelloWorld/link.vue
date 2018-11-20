<template>
  <a  :href='link'
      @click='showIndex'
  >{{content}}</a>

</template>

<script>
export default {
  name: 'Link',
  props: ['content', 'link', 'linkIndex'],
  methods: {
    showIndex () {
      console.log('innerDel' + this.linkIndex)
      if (this.linkIndex === 1) {
        this.$emit('delete', this.linkIndex)
      }
    }
  }
}
</script>

<style scoped>
  a:active{
    background: transparent;
    text-decoration: none;
  }
</style>
