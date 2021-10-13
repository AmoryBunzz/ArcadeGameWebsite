const models = require('../models')
const Validator = require('fastest-validator')

const schema = {
    DevID: {type:"number", optional: false},
    IFrame: {type:"string", optional: false},
    UploadDate: {type:"string", optional: false},
    GameTitle: {type:"string", optional: false, max: "50"},
    GameAvatar: {type:"string", optional: false},
    Category: {type:"string", optional: false, max: "50"},
    GamePlayImage: {type:"string", optional: true},
    Description: {type:"string", optional: true},
    Played: {type:"number", optional: true},
    Rate: {type:"number", optional: true, max: "5"}
}

const v = new Validator();

// This function create a new Game post and save it to database
function save(req,res){
    const game = {
        DevID: req.body.DevID,
        IFrame: req.body.IFrame,
        UploadDate: req.body.UploadDate,
        GameTitle: req.body.GameTitle,
        GameAvatar: req.body.GameAvatar,
        Category: req.body.Category,
        GamePlayImage: req.body.GamePlayImage,
        Description: req.body.Description,
        Played: req.body.Played,
        Rate: req.body.Rate
    }

    const validationResponse = v.validate(game, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Game.create(game).then(result => {
        res.status(201).json({
            message: "Game created successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

// This function return a Game post founded in database by a given id
function show(req, res){
    const id = req.params.id;

    models.Game.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Game not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    });
}

// This function get all Game post in database
function index(req, res){
    models.Game.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

// This function update a Game post in database by a given id
function update(req, res){
    const id = req.params.id;
    const updateGame = {
        DevID: req.body.DevID,
        IFrame: req.body.IFrame,
        UploadDate: req.body.UploadDate,
        GameTitle: req.body.GameTitle,
        GameAvatar: req.body.GameAvatar,
        Category: req.body.Category,
        GamePlayImage: req.body.GamePlayImage,
        Description: req.body.Description,
        Played: req.body.Played,
        Rate: req.body.Rate
    }

    const validationResponse = v.validate(updateGame, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Game.update(updateGame, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "Game updated successfully",
            post: updatedPost
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    })
}

// This function delete a Game post in database by a given id
function destroy(req, res){
    const id = req.params.id;

    models.Game.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Game deleted successfully"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    });
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}