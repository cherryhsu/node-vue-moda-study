module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body)//创建
        res.send(model)//将结果发送到前端
    })
    router.post('/categories/:id', async (req, res) => {
        const model = await Category.findByIdAndUpdate(req.params.id, req.body)//更新
        res.send(model)//将结果发送到前端
    })
    router.delete('/categories/:id', async (req, res) => {
        await Category.findByIdAndDelete(req.params.id)//删除
        res.send({
            success: true
        })//将结果发送到前端
    })
    router.get('/categories', async (req, res) => {
        const data = await Category.find().populate('parent').limit(10)//查询,限制10条,populate关联字段对象
        res.send(data)//将结果发送到前端
    })
    router.get('/categories/:id', async (req, res) => {
        const data = await Category.findById(req.params.id)//查询根据id
        res.send(data)//将结果发送到前端
    })
    app.use('/admin/api', router)
}