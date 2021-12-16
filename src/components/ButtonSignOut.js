import React, { PureComponent } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'


type Props = {
    onPress: func
}

class ButtonSignOut extends PureComponent<Props> {

    render() {
        return (
            <View style={{position:'relative',right:20,top:5}}>
                <TouchableOpacity onPress={ this.props.onPress }
                >
                    <Image style={ styles.container } source={ require('./../../assets/images/icons/baseline-more_vert.png') } />
                </TouchableOpacity>
            </View>
        )
    }
}

export default ButtonSignOut

const styles = StyleSheet.create({

})
