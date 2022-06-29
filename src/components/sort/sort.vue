<template>
  <div class="sort-container">
      
   <el-select  v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-tabs stretch v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="犬类分类" name="first">
        <ul class="mui-table-view mui-grid-view mui-grid-9" v-for="item in sortList" :key="item._id">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <img :src="item.dog1" />
            <div class="mui-media-body">{{item.text1}}</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <img :src="item.dog2" />
            <div class="mui-media-body">{{item.text2}}</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <img :src="item.dog3"/>
            <div class="mui-media-body">{{item.text3}}</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <img :src="item.dog4" />
            <div class="mui-media-body">{{item.text4}}</div>
          </router-link>
        </li>
        
      </ul>
    </el-tab-pane>
    <el-tab-pane label="猫咪分类" name="second">
        <ul class="mui-table-view mui-grid-view mui-grid-9" v-for="item in sortList" :key="item._id">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <img :src="item.cat1" />
            <div class="mui-media-body">{{item.name1}}</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <img :src="item.cat2" />
            <div class="mui-media-body">{{item.name2}}</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <img :src="item.cat3"/>
            <div class="mui-media-body">{{item.name3}}</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <img :src="item.cat4" />
            <div class="mui-media-body">{{item.name4}}</div>
          </router-link>
        </li>
        
      </ul>
    </el-tab-pane>
    <el-tab-pane label="宠物信息" name="third">
          <el-descriptions class="tab" title="" :column="1" border v-for="item in sortList" :key="item._id" >
  <el-descriptions-item label="宠物名" label-class-name="my-label" content-class-name="my-content">{{item.text1}}</el-descriptions-item>
  <el-descriptions-item label="缺点">{{item.que}}</el-descriptions-item>
  <el-descriptions-item label="遗传疾病">{{item.bing}}</el-descriptions-item>
  <el-descriptions-item label="宠物图片">
    <img class="imageinfo" :src="item.dog1">
    <img class="imageinfo" :src="item.dog2">
  </el-descriptions-item>
  <el-descriptions-item label="睡觉问题" >{{item.sleep}}</el-descriptions-item>
  <el-descriptions-item label="行为训练" >{{item.behavior}}</el-descriptions-item>
  <el-descriptions-item label="疫苗注射" >{{item.miao}}</el-descriptions-item>
  <el-descriptions-item label="如何遛狗" >{{item.pull}}</el-descriptions-item>
</el-descriptions>
    </el-tab-pane>
  </el-tabs>


  </div>
  </template>
<script>
export default {
    data() {
        return {
            sortList:[],
            activeName: 'second',
             options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
        }
    },
    created() {
    this.getsortlist();
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getsortlist() {
      this.$http.get("sorts").then((result) => {
        console.log(result.body);
        this.sortList = result.body;
      });
    },
    }
    
}
</script>
<style lang="scss" scoped>
.sort-container{
    width: 100%;
    margin-top: 42px;
    .mui-table-view.mui-grid-view.mui-grid-9{
        background: snow;
      border: none;
      width: 100%;
      height: 100%;
      li {
        border: none;
        width: 25%;
        height: 150px;
        margin-top: -15px;
      }
      img {
        width: 75px;
        height: 75px;
        border-radius: 10%;
      }
      .mui-media-body {
        font-size: 14px;
      }
    }
    .tab{
        margin-bottom: 20px;
        background: antiquewhite;
        .imageinfo{
        width: 80px;
        height: 80px;
        margin-left: 10px;
        border-radius: 5%;
    }
    }
    }

</style>