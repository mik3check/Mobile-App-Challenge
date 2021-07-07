import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    grandContainer: {
        backgroundColor: 'white',
        flex: 1,
        padding: '5%'
        
    },
    profileBar: {
        backgroundColor: '#ab413b',
        flexDirection: 'row',
        flex: .5,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    sectContainer: {
        backgroundColor: 'white',
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
         
    },
    profileInfoContainer: {
        flex: 1.3,
        flexDirection: 'row',
        paddingLeft: '2%',
        paddingRight: '2%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
        
    },
    numberContainer: {
        flex: .4,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderTopColor: 'green',
        borderBottomColor: 'green',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        justifyContent: 'space-between',
        marginLeft: '2%',
        marginRight: '2%',
        alignItems: 'center'
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        fontSize: 20,
        marginRight: '5%'
    },
    counterText: {
        fontSize: 12,
        color: '#A8A8A8'
    },
    mapContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: '2%',
        paddingRight: '2%'
    },
    largeFont: {
        fontSize: 22
    },
    smallFont: {
        fontSize: 12
    },
    alertListContainer: {
        backgroundColor: 'white',
        flex: 2.3,
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
        
    },
    footMenuContainer: {
        flex: .8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '3%'
        
    },
    footerIcon: {
        height: 50,
        width: 50

    },
    footerContainer: {
        flex: .5,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    }
});