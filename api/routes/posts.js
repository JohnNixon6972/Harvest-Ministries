const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//  Create New Post
router.post("/",async (req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost =await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }

});
//  Update Post
router.put("/:id", async (req,res)=>{    
    try{
        const post =await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatePost = await Post.findById()
            }catch(err){
    
            }
        }else{
            res.status(401).json("you can update only your post!")
        }
    }catch(err){
        res.status(500).json(err)
    }
});

// Delete Post

// Get Post
router.get("/:id",async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;

