<template>
  <div>
    <friend-link></friend-link>
    <apply-modal :is-show="isShowApplyModal" :title="title" :from="from"></apply-modal>
  </div>
</template>
<script>
  import friendLink from './friendLink.vue';
  import applyModal from './applyModal.vue';
	export default{
    components: {
      friendLink,
      applyModal
    },

    data: () => ({
      isShowApplyModal: false,
      title: '开始申请试用',
      from: '10001',
    }),
    
    created() {
      this.$root.$on('toggleApplyModal', (state, title, from) => {
        // debugger
        this.isShowApplyModal = state
        this.title = title
        if(from) {
          this.from = from
        }
      })
    },
  }
</script>