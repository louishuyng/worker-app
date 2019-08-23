import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

import { ModalUIProps } from '../types';
import { CLOSE_ICON } from 'utils/Icons';
import { Types } from '../../Button/types';
import { ButtonUI } from '../..';

const ModalWrapper = styled.View`
  background-color: white;
  border-radius: 8;
  display: flex;
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

const ContentWrapper = styled.View``;

const ButtonWrapper = styled.View`
  flex-direction: row;
  padding-top: 20;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 10;
`;

const Title = styled.Text`
  font-family: 'Roboto-Regular';
 `;

const ModalLayout = (props: ModalUIProps) => {
  const {
    title,
    submitActionName,
    cancelActionName,
    closeModal,
    children,
    onPress,
  } = props;
  return (
    <View>
      <Modal
        isVisible={true}
        animationIn='fadeIn'
        animationOut='fadeOut'
        backdropTransitionOutTiming={0}
      >
        <ModalWrapper>
          <TitleWrapper title={title as string}>
            <Title>{title}</Title>
            <TouchableOpacity
              onPress={() => closeModal()}
              style={{ alignSelf: 'center' }}
            >
              <Image source={CLOSE_ICON} />
            </TouchableOpacity>
          </TitleWrapper>
          <ContentWrapper>{children}</ContentWrapper>
          <ButtonWrapper>
            {cancelActionName &&
              <View style={{ paddingRight: 5, flex: 1 }}>
                <ButtonUI
                  title={cancelActionName}
                  onPress={() => closeModal()}
                  type={Types.ADD}
                />
              </View>
            }
            <View style={{ paddingLeft: 5, flex: cancelActionName ? 1 : 0.5 }}>
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
};

export default ModalLayout;
