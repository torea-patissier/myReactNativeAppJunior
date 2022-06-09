import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
    },

    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        backgroundColor:'dodgerblue',
        marginTop:'50%',
        borderRadius: '47%',
    },
    
    input: {
        margin: 10,
        padding: 18,
        borderRadius:5,
        width:'80%',
        backgroundColor: 'white',
    },

    boutonConfirmation: {
        margin: 10,
        borderWidth: 1,
        padding: 18,
        borderRadius:5,
        width:'80%',
        backgroundColor: 'black',
    },

    textConfirmation: {
        color: 'white',
        textAlign:'center',
        fontSize:18
    },

    lien: {
        color: 'white',
        fontWeight:'bold',
    },

    lienTxt:{
        flexDirection: 'row',
        marginTop: 20,
    }
    
}) 