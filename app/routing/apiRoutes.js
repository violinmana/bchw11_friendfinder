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

        // Variables for Checking
        let difference = 0
        let matchDiff = 50

        // Check Compatibility
        for (let i = 0; i < friends.length; i++) {
            difference = 0
            for (let j = 0; j < friends[i].scores.length; j++) {
                difference += Math.abs(friends[i].scores[j] - newFriend.scores[j])
                if (difference <= matchDiff) {
                    match.name = friends[i].name,
                        match.image = friends[i].image,
                        matchDiff = difference
                }
            }
        }

        // Add new friend to list
        friends.push(newFriend);

        console.log(match);

        // Send back JSON of best match
        res.json(match);

    })
}