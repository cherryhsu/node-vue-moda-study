<template>
  <div>
    <h1>{{id?'编辑':'新建'}}文章</h1>
    <el-form label-width="120px">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" placeholder="请选择" multiple>
          <el-option
            v-for="item in categoriesOptions"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
       <el-form-item label="详情">
        <el-input v-model="model.body"></el-input>
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
      model: {},
      categoriesOptions: {}
    };
  },
  created() {
    this.id && this.fetch(); //id存在时执行该方法
    this.fetchCategoriesOptions()
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.post(`rest/articles/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/articles", this.model);
      }

      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "提交成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchCategoriesOptions() {
      const res = await this.$http.get(`rest/categories`);
      this.categoriesOptions = res.data;
    }
  }
};
</script>
<style>
</style>