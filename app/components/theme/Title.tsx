import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const Title = ({name}) => {
    return (
        <View>
             <Text h3 style={styles.headerText}>
                    {name}
                </Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
      },
})
