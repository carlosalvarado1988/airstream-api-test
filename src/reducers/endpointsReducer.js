export default function() {
    return [
        {name: 'GET ALL FRIENDS', endpoint:'/parse/functions/allFriends', type: 'POST', uri1: null , uri2: null },
        {name: 'GET FRIEND SUGGESTIONS', endpoint:'/parse/functions/allSuggestions', type: 'POST', uri1: null, body: null },
        {name: 'FIND USER', endpoint:'/parse/functions/findUser/?type=&value=', type: 'POST', uri: ['userId', 'value'], body: null },
        {name: 'CREATE FRIEND REQUEST', endpoint:'/parse/functions/createFriendRequest?userId=', type: 'POST', uri: ['userId'], body: null },
        {name: 'ACCEPT FRIEND REQUEST', endpoint:'/parse/functions/acceptFriendRequest?userId=', type: 'POST', uri: ['userId'], body: null },
        {name: 'IGNORE FRIEND REQUEST', endpoint:'/parse/functions/ignoreFriendRequest?userId=', type: 'POST', uri: ['userId'], body: null },
        {name: 'UNFRIEND A USER', endpoint:'/parse/functions/unFriend?userId=', type: 'POST', uri: ['userId'], body: null },
        {name: 'GET INCOMING FRIEND REQUESTS', endpoint:'/parse/functions/myIncomingPendingFriends', type: 'POST', uri: null, body: null },
        {name: 'GET OUTGOING FRIEND REQUESTS', endpoint:'/parse/functions/myOutgoingPendingFriends', type: 'POST', uri: null, body: null },
      ]
}