module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true//合并url参数
    })
    //const Category = require('../../models/Category')
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)//创建
        res.send(model)//将结果发送到前端
    })
    router.post('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)//更新
        res.send(model)//将结果发送到前端
    })
    router.delete('/:id', async (req, res) => {

        await req.Model.findByIdAndDelete(req.params.id)//删除
        res.send({
            success: true
        })//将结果发送到前端
    })
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const data = await req.Model.find().setOptions(queryOptions).limit(10)//查询,限制10条,populate关联字段对象
        // const data = await req.Model.find().populate('parent').limit(10)//查询,限制10条,populate关联字段对象
        res.send(data)//将结果发送到前端
    })
    router.get('/:id', async (req, res) => {
        const data = await req.Model.findById(req.params.id)//查询根据id
        res.send(data)//将结果发送到前端
    })
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    const multer = require('multer')//将上传文件的数据赋值到req上
    const upload = multer({ dest: __dirname + '/../../uploads' })//当前文件所在文件夹
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        res.send(file)

    })
}