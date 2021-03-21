function solution(cmnd) {

    let commands = {
        'upvote': () => this.upvotes++,
        'downvote': () => this.downvotes++,
        'score': () => {
            let [positive, negative] = [this.upvotes, this.downvotes]
            let ballance = this.upvotes - this.downvotes;
            let totalVotes = this.upvotes + this.downvotes;
            let rating = 'new';

            if (((positive / totalVotes) * 100) > 66 && totalVotes > 10) {
                rating = 'hot';
            } else if (ballance >= 0  && positive > 100) {
                rating = 'controversial'
            } else if (ballance < 0 && totalVotes >= 10) {
                rating = 'unpopular'
            } else if (totalVotes < 10) {
                rating = 'new'
            }

            if (totalVotes > 50) {
                let obf = positive > negative ? Math.ceil(positive * 0.25) : Math.ceil(negative * 0.25);
                positive += obf;
                negative += obf;
            }

            return [positive, negative, ballance, rating]
        },
    }

    return commands[cmnd]()
}


// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };

// solution.call(post, 'upvote');
// solution.call(post, 'downvote');

// console.log(post.downvotes, post.upvotes)
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score)
// solution.call(post, 'downvote');       // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
// console.log(score)

// var forumPost = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 0,
//     downvotes: 0
// };

// solution.call(forumPost, 'upvote');

// var answer = solution.call(forumPost, 'score');

// console.log(answer)


var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};


var answer = solution.call(forumPost, 'score');
var expected = [4, 5, -1, 'new'];
console.log(expected, answer);

solution.call(forumPost, 'downvote');
answer = solution.call(forumPost, 'score');
expected = [4, 6, -2, 'unpopular'];
console.log(expected, answer);

solution.call(forumPost, 'upvote');
solution.call(forumPost, 'upvote');
answer = solution.call(forumPost, 'score');
expected = [6, 6, 0, 'new'];
console.log(expected, answer);
