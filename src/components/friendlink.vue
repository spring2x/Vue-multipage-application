<template>
  <div>
    <div class="friend-links">
      <div class="friend-links-content">
        <dl class="friend-links-list">
          <dt>友情链接</dt>
          <dd>
            <a v-for="item in friendLists" :href="item.LinkUrl" target="_blank">{{item.LinkName}}</a>
          </dd>
        </dl>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data: () => ({
    friendLists: [],
  }),
  created() {
    const self = this;
    axios.get("/api/home_2017/GetBottomMenuData")
      .then(function(response) {
        // console.log(response.data);
        self.friendLists = response.data;
        //   console.log(self.friendLists);
      })
  }

}
</script>
