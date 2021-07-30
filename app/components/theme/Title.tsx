import React, {FC} from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

interface Props {
    name: string;
 }

const Title: FC<Props> = ({name}) => {
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
