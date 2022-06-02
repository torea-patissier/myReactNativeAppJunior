import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
    },
    
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderRadius:5,
        width:'80%',
    },

    boutonConfirmation: {
        margin: 12,
        borderWidth: 1,
        padding: 15,
        borderRadius:5,
        width:'80%',
        backgroundColor: 'blue',
    },

    textConfirmation: {
        color: 'white',
        textAlign:'center',
        fontSize:18
    },

    lien: {
        color: 'blue',
    },

    lienTxt:{
        flexDirection: 'row',
        marginTop: 20,
    }
    
}) 