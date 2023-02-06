const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product]
  }).then(data => {
    res.json(data)
  }).catch(err => handleError(res, err))
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id,{
    include: [Product]
  }) .then((data) => {
    res.status(200).json(data);
  })
  .catch(err => handleError(res, err))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((data) => {
    return res.status(200).json(data);
  })
  .catch(err => handleError(res, err))
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name:req.body.tag_name,
  },{
    where:{
        id:req.params.id
    }
  }).then(data=>{
    res.json(data)
  })
  .catch(err => handleError(res, err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.findByPk(req.params.id).then(foundTag => {
    if(!foundTag){
      res.status(400).json({msg: "no such tag"});
    } else {
      Tag.destroy({
        where:{
            id:req.params.id
        }
      }).then(data=>{
          res.json(data);
      })
      /*
      console.log(foundTag)
      foundTag.removeTag(req.params.id).then(data => {
        res.json(data);
      })
      */
      .catch(err => handleError(res, err))
    }
  })
});

function handleError(res, err) {
  console.log(err)
  res.status(500).json({
    msg:"an error ocurred",
    err:err
  })
}

module.exports = router;
