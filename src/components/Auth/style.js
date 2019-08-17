import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    root: {
        paddingTop: 70,
        paddingHorizontal: 10,
    },
    container: {
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#f0f0f0e0',
        justifyContent: 'center',
        borderRadius: 5,
        width: '100%'
    },
    title: {
        fontSize: 20,
        paddingBottom: 10,
    },
    subTitle: {
        fontSize: 14,
        paddingBottom: 20,
        color: '#a0a0a0',
        textAlign: 'center',
    },
    inputBox: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 20,
        marginVertical: 1,
    },
    button: {
        width: '100%',
        backgroundColor: '#8cc1fa',
        borderRadius: 5,
        marginVertical: 15,
        paddingVertical: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    forgetLink: {
        paddingVertical: 15,
        borderBottomColor: '#a0a0a0',
        borderBottomWidth: 1,
        width: '100%',
    },
    forgetText: {
        fontSize: 15,
        color: '#a0a0a0',
        fontWeight: '500',
        textAlign: 'center',
    },
    navigateLink: {
        paddingTop: 20,
        width: '100%',
    },
    navigateText: {
        fontSize: 20,
        color: '#a0a0a0',
        textAlign: 'right',
        paddingRight: 20,
    },
});
