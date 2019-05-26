import React from 'react';
import { Modal, View, Text, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
export default class MenuModal extends React.Component {
    state = {
        modalVisible: true,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    //Alert.alert('Modal has been closed.');
                    this.setModalVisible(!this.state.modalVisible);
                    this.props.navigation.navigate('app')
                }}>
                <View style={{ marginTop: 22, flex: 1 }}>
                    <TouchableOpacity><Text>Exit</Text></TouchableOpacity>
                </View>
            </Modal>


        );
    }
}