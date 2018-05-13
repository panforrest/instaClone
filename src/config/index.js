import { Dimensions } from 'react-native'

export default{
	// heartIcon: require('')
	images: {
		heartIcon: require('../../assets/heart.png'),
		bubbleIcon: require('../../assets/heart.png'),
		arrowIcon: require('../../assets/heart.png')
	},
	styleConstants: {
        rowHeight: 50,
        oneThirdWidth: Dimensions.get("window").width / 3
	},
	// baseUrl: 'http://instaapi-55ibpu.turbo360-vertex.com/api/'
	baseUrl: "http://localhost:3000/api/"
}