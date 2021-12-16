import React, { PureComponent } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

type Props = {
    onPress: func
}

class GoBackButton extends PureComponent<Props> {

    render() {
        return (
            <View>
                <TouchableOpacity onPress={ this.props.onPress }
                >
                    <Image style={ styles.container } source={ require('./../../assets/images/icons/left_arrow_icon.png') } />
                </TouchableOpacity>
            </View>
        )
    }
}

export default GoBackButton

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    }
})
