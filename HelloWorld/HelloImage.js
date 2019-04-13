import React, { Component } from 'react' 
import { AppRegistry, Image } from 'react-native' 

export default class HelloImage extends Component {
    render() {
        let pic = {
            uri: 'https://media.licdn.com/dms/image/C5603AQFTGf_Y1JA9rg/profile-displayphoto-shrink_800_800/0?e=1560384000&v=beta&t=tAaY617mhvZrGX30STgvZBhpAk4SbF972JdXfv-WAJQ'

        }
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        )
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloImage)