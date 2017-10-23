export default function() {
    return [
        {endpoint:'/parse/functions/allFriends',
        type: 'POST',
        url: true,
        body: true
        },
        {endpoint:'/parse/GET/allFriends',
        type: 'GET',
        url: false,
        body: true
        },
        {endpoint:'/parse/PUT/allFriends',
        type: 'PUT',
        url: true,
        body: false
        },
        {endpoint:'/parse/ABC/allFriends',
        type: 'POST',
        url: false,
        body: false
        }
      ]
}