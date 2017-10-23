export default function() {
    return [
        {endpoint:'/parse/functions/allFriends',
        endpointType: 'POST',
        requiresUrlParam: true,
        requiresBodyParam: true
        },
        {endpoint:'/parse/GET/allFriends',
        endpointType: 'GET',
        requiresUrlParam: false,
        requiresBodyParam: true
        },
        {endpoint:'/parse/PUT/allFriends',
        endpointType: 'PUT',
        requiresUrlParam: true,
        requiresBodyParam: false
        },
        {endpoint:'/parse/ABC/allFriends',
        endpointType: 'POST',
        requiresUrlParam: false,
        requiresBodyParam: false
        }
      ]
}