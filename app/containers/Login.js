/**
 * Copyright (c) 2017-present, RiverSunny, Inc.
 * All rights reserved.
 *
 * Login View
 */
import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight

} from 'react-native';

const userDefaultIcon = require("../img/DefaultHead.png");

export default class Login extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={userDefaultIcon} style={styles.iconStyle} />
                {/*账号和密码*/}
                <View style={styles.aview}>
                    <Text style={styles.labeltext}>账号</Text>
                    <TextInput ref='textInput1' style={styles.textInputStyle} placeholder={'请输入微信账号'}
                               placeholderTextColor="#dddddd"/>
                </View>
                <View style={styles.bview}>
                    <Text style={styles.labeltext}>密码</Text>
                    <TextInput ref="textInput2" style={styles.textInputStyle} placeholder={'请输入密码'}
                               placeholderTextColor="#dddddd"/>
                </View>


                {/*登录按钮*/}

                <Button
                    containerStyle={styles.containerStyle}
                    disabledContainerStyle={{backgroundColor: 'grey'}}
                    style={styles.loginButton}>
                    登录
                </Button>
            </View>
        );
    }

    _login(){

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems:'center'
    },
    iconStyle:{
        width:80,
        height:80,
        borderWidth:2,
        borderColor:'white',
        marginTop:100,
        marginBottom:30
    },
    textInputStyle:{
        marginLeft:60,
        height:40,
        width:200,
        fontSize:14,
        marginBottom:1,
        textAlign:'left'
    },
    aview:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'#d6d7da',
    },
    bview:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:50,
    },
    labeltext:{
        fontSize:16,
    },
    containerStyle:{
        padding:10,
        height:45,
        width:320,
        overflow:'hidden',
        borderRadius:4,
        backgroundColor: '#1EA114'
    },
    loginButton:{
        fontSize: 20,
        color: 'white'
    }
});
