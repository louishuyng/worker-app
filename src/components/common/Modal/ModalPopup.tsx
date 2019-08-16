import React, { Component } from 'react';
import { Button, View, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

import ButtonUI from 'components/common/Button/Button';
import { Types } from 'components/common/Button/types';
import { CLOSE_ICON } from 'utils/Icons';
import { ModalUIProps, ModalUIState } from './types';

const ModalWrapper = styled.View`
  background-color: white;
  border-radius: 8;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  padding-top: 20;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 20;
  justify-content: space-between;
  border-bottom-width: ${({ title }: { title: string }) => (title ? 1 : 0)};
  border-bottom-color: #dbdede;
`;

const ContentWrapper = styled.View`
  padding-top: 15;
  padding-left: 15;
  padding-right: 15;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  padding-top: 20;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 10;
`;

const Title = styled.Text`
  font-size: 16;
`;

export default class ModalUI extends Component<ModalUIProps, ModalUIState> {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { modalName, title, submitActionName, onPress } = this.props;
    return (
      <View>
        <Button title={modalName} onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          animationIn='fadeIn'
          animationOut='fadeOut'
          backdropTransitionOutTiming={0}
        >
          <ModalWrapper>
            <TitleWrapper title={this.props.title as string}>
              <Title>{title}</Title>
              <TouchableOpacity
                onPress={this.toggleModal}
                style={{ alignSelf: 'center' }}
              >
                <Image source={CLOSE_ICON} />
              </TouchableOpacity>
            </TitleWrapper>
            <ContentWrapper>{this.props.children}</ContentWrapper>
            <ButtonWrapper>
              <View style={{ paddingRight: 5, flex: 1 }}>
                <ButtonUI
                  title='cancel'
                  onPress={this.toggleModal}
                  type={Types.ADD}
                />
              </View>
              <View style={{ paddingLeft: 5, flex: 1 }}>
                <ButtonUI
                  title={submitActionName}
                  onPress={onPress}
                  type={Types.SUBMIT}
                />
              </View>
            </ButtonWrapper>
            <View />
          </ModalWrapper>
        </Modal>
      </View>
    );
  }
}
