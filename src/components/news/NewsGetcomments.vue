<template>
  <div>
    <div class="box">
      <div class="user">
        <p>用户名</p>
        <!-- @keyup监听键盘事件 -->
        <!-- @keyup.enter回车键获取值 -->
        <p>
          <input
            v-model.trim="user"
            @keyup.enter="addItem()"
            type="text"
            placeholder="用户名"
          />
        </p>
        <p>评论内容</p>
        <p>
          <textarea
            v-model="comm"
            @keyup.enter="addItem()"
            placeholder="内容"
          ></textarea>
        </p>
        <p><button type="button" @click="btn">提交</button></p>
      </div>
      <div class="speak">
        <p>评论回复：</p>
        <ul v-for="item in list" :key="item.name">
          <li>
            {{ item.name }}说：{{ item.txt }}
            <button><a href="#" @click="delItem(item)">删除</a></button>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  el: ".box",
  data() {
    return {
      // 评论用户以及内容的数据
      // name评论的用户名字 txt评论的内容
      list: [
        { name: "小红", txt: "减肥~~" },
        { name: "小明", txt: "我很健康！" },
        { name: "小蓝", txt: "我很美丽~" },
        { name: "小紫", txt: "我爱学习" },
      ],
      user: "", //输入的名字存入
      comm: "", //评论存入
    };
  },
  methods: {
    // 点击按钮提交
    btn() {
      var usercom = {
        name: this.user,
        txt: this.comm,
      };
      this.list.unshift(usercom);
      this.user = "";
      this.comm = "";
    },
    // 用户名方法事件
    addItem() {
      // 创建用户名
      var item = {
        // 用户名字
        name: this.user,
        // 用户评论
        txt: this.comm,
      };

      // 在list前面添加 item    unshift在前面添加
      this.list.unshift(item);

      // 清空user
      this.user = "";
      // 清空评论
      this.comm = "";
    },
    //删除点击事件  获取元素
    delItem(item) {
      // 查找元素item在list里的下标
      var ind = this.list.findIndex((value) => value.name == item.name);
      //删除
      // splice 功能（从第几个元素，删除几个 添加内容）
      this.list.splice(ind, 1);
    },
  },
}

</script>
<style lang="scss" scoped>
.speak{
    color: cornflowerblue;
}
</style>