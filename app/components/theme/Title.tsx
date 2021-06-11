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
        fontSize: 30,
        fontWeight: 'normal',
        color: '#6236ff',
      },
})
