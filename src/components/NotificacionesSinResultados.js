//Dependency
import React, {Component} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash'

//Components

//Assets
import { BLACK } from '../styles/Colors'


const mapStateToProps = (state) => {
    const {env: {API_ENV}} = process

    return {
        currentUser: API_ENV === 'dev' ? state.currentUser.profile : state.auth.profile,
        total:state.mensajesNotificaciones.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({}, dispatch)
    }
}

class NotificacionesSinResultados extends Component{

    state = {}

    render() {
        const { total } = this.props
        return (
            total === 0 ? <View>
                    <Image style={styles.imageContainer}
                           source={require('./../../assets/images/icons/appointmentReminders2.png')}

                    />
                    <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}

                            >SIN NOTIFICACIONES REGISTRADAS AUN</Text>
                        </View>
                        <Text style={styles.text}

                        >Aquí encontraras una lista con todas tus notificaciones asignadas
                            en
                            el último tiempo. </Text>
                    </View>
                </View>
                : total == '' ? <View>
                    <Image style={styles.imageContainer}
                           source={require('./../../assets/images/icons/error_notificacion.png')}

                    />
                    <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}

                            >ERROR AL OBTENER NOTIFICACIONES REGISTRADAS</Text>
                        </View>
                    </View>
                </View>:null
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificacionesSinResultados)

const styles = StyleSheet.create({
    imageContainer: {
        width: 200,
        height: 240,
        padding: 10,
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20,
        marginBottom: 10
    },
    infoContainer:{
        marginTop: 20
    },
    titleContainer:{
        paddingHorizontal:8
    },
    title: {
        fontSize: 17,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color:BLACK,
        textAlign: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        color:BLACK,
        textAlign: 'center',
        marginTop: 10,
    },
})
