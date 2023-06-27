// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint =
'https://accounts.spotify.com/authorize';
const redirectUri = "http://localhost:3000/";
const clientId =  "c7d640eef734446db37fd2d462d9f85e" ;

const scopes = [      //give correct permissions in spotify
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  //trying to pull out the loginurl out
  export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&') //not need any other parameters passed than the access token
        .reduce((initial,item) => {
                let parts = item.split('=');
                initial[parts[0]] = decodeURIComponent(parts[1]);

                return initial;
        },{});
    }

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

