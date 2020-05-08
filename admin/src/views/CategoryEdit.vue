<template>
  <div>
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <el-form label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.post(`categories/${this.id}`, this.model);
      } else {
        res = await this.$http.post("categories", this.model);
      }

      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "提交成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`categories/${this.id}`);
      this.model = res.data;
    }
  }
};
</script>
<style>
</style>