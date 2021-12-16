import React, {PureComponent} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'

type Props = {
    title: String,
    label: String,
    value: String,
    active: String,
    editable: true,
    handleSelectItem: func
}

class BooleanRadioButton extends PureComponent<Props> {

    state = {
        active: this.props.active
    }

    componentWillReceiveProps(nextProps) {
        const {active} = this.props

        if (active !== nextProps.active) {
            this.setState({active: nextProps.active})
        }
    }

    render() {
        const {active} = this.state
        const {handleSelectItem, value, label, title, editable, pID} = this.props

        return (
            <View>
                {/*Action de activacion de radio button*/}
                <TouchableOpacity onPress={() => editable ? handleSelectItem(value, title) : null}
                                  style={styles.radioButtonContainer}

                >
                    {
                        //Estados del radio button true o false
                        typeof (active) === 'string' && active.toLowerCase() === label.toLowerCase()
                            ? <Image source={require('./../../assets/images/icons/bool_radiobutton_active_icon.png')}

                            />
                            : <Image source={require('./../../assets/images/icons/bool_radiobutton_inactive_icon.png')}

                            />
                    }
                    {/*Texto que tiene el radio button*/}
                    <Text style={styles.label}

                    >
                        {label}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default BooleanRadioButton

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        width: '50%'
    },
    label: {
        fontSize: 16,
        marginLeft: 15
    }
})
