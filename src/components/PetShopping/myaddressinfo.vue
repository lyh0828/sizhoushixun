<template>
    <div class="myaddressinfo">
        <van-contact-card
  type="edit"
  :name="currentContact.name"
  :tel="currentContact.tel"
  @click="onEdit"
/>
    </div>
</template>
<script>
export default {
     data() {
    return {
      currentContact: {
        name: '张三',
        tel: '13000000000',
      },
    };
  },
  methods: {
    onEdit() {
      Toast('编辑');
    },
  },
}
</script>
<style lang="scss">
    .myaddressinfo{
        margin-top:43px;
    }
</style>