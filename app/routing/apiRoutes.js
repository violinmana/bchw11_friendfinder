var friends = require('../data/friends.js')

module.exports = app => {

    // Get Friends List JSON
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })

    // Post Friends w/ Logic for Search Results
    app.post('/api/friends', (req, res) => {

        // Add new friend to friends.js
        var newFriend = req.body;

        // Object to hold Best Match
        var match = {
            name: '',
            image: ''
        }



    })
}