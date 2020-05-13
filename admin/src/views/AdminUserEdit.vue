<template>
  <div>
    <h1>{{id?'编辑':'新建'}}管理员</h1>
    <el-form label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  created() {
    this.id && this.fetch(); //id存在时执行该方法
  },
  methods: {
    handleAvatarSuccess(res) {
      this.$set(this.model, "icon", res.url);
      //this.model.icon = res.url;
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.post(`rest/admin_users/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/admin_users", this.model);
      }

      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "提交成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>