import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#548050',
	},
	header: {
		margin: 10,
		flexDirection: 'row',
		height: 50,
		alignItems: 'center',
	},
	headerLeft: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		backgroundColor: '#de4d51',
		width: 50,
		height: 50,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatarText: {
		fontSize: 30,
		color: '#ffffff',
	},
	avatarName: {
		marginLeft: 10,
		fontSize: 20,
		color: '#ffffff',
	},
	headerRight: {
		width: 120,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 10,
	},
	content: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	listItem: {
		flexDirection: 'row',
		margin: 15,
		alignItems: 'flex-end',
	},
	listItemText: {
		marginLeft: 15,
		fontSize: 20,
	},
	createButton: {
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
	},
});