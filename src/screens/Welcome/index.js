import React from "react";
import { Pressable, Text, View, StyleSheet} from 'react-native'

const Welcome = ({navigation}) => {

    const goToApplication = () => {
        navigation.navigate('tabNavigator')
    }
    return(
        <View style={styles.homeContainer}>
            <Pressable style={styles.button} onPress={goToApplication}>
                <Text style={styles.text}>Entrar</Text>
            </Pressable>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 10
    },
    text: {
        fontSize: 25,
        color: 'white'
    }
})