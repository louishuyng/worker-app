import React from 'react';
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actionsheet';
import { ImageSourcePropType, Platform, Modal, Text, View, Image, TouchableOpacity } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { NavigationScreenProp } from 'react-navigation';

import { JobThumbnail } from 'components/JobList/shared';
import { mockJobData } from 'components/JobList/mock';
import SectionJobDetail from './section';
import { getString } from 'locales';
import { IC_CAMERA, TRASH_ICON } from 'utils/Icons';
import DividedBox from './content/DividedBox';
import { TitleTimeData, TitleDetailsOneData, TitleDetailsTwoData } from './models';
import { mockdataDetailsOne, mockdataTime, mockdataDetailsTwo } from './mock';
import GridBox from './content/GridBox';
import DisplayBox from './content/DisplayBox';
import { ButtonUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { convertHeight, convertWidth } from 'utils/convertSize';
import Map from './content/Map';
import { RouteName } from 'constant';

const ScrollView = styled.ScrollView`
  background: ${({ theme }) => theme.colors.aquaHaze};
`;

const WrapperFooter = styled.View`
  justify-content: center;
  align-items: center;
`;

const ExtendFooterBox = styled.View`
  height: ${convertHeight(24)};
`;

const WrapperButton = styled.View`
  height: ${convertHeight(56)};
  width: 100%;
  padding-horizontal: ${convertWidth(10)};
`;

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {
  imagesSource: any[];
  isModalVisible: boolean;
  currentIndexImage: number;
}

const optionsMenu = ['Cancel', 'Take photo', 'Choose from Library'];

export default class JobDetail extends React.Component<Props, State> {
  private ActionSheet: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      imagesSource: [],
      isModalVisible: false,
      currentIndexImage: 0,
    };
  }

  showActionSheet = () => {
    this.ActionSheet.show();
  }

  showCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image: any) => {
      this.setState({
        ...this.state,
        imagesSource: this.state.imagesSource.concat(
          Platform.OS === 'ios' ? { url: image.sourceURL } : { url: image.path }
        ),
      });
    });
  }

  showGallery = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      const imageUris = (images as []).map((image: any) =>
        Platform.OS === 'ios' ? { url: image.sourceURL } : { url: image.path }
      );
      this.setState({
        ...this.state,
        imagesSource: this.state.imagesSource.concat(imageUris),
      });
    });
  }

  handleRemoveImage = () => {
    const { imagesSource, currentIndexImage } = this.state;
    imagesSource.splice(currentIndexImage, 1);
    this.setState({
      ...this.state,
      imagesSource: [...imagesSource],
      isModalVisible: false,
      currentIndexImage: currentIndexImage > 0 ? currentIndexImage - 1 : currentIndexImage,
    });
  };

  render() {
    const { navigation: { getParam } } = this.props;

    return (
      <ScrollView>
        <JobThumbnail
          jobData={getParam('data')} isFlat={true} isHideIcon={true}
          isHideLocation={true}
          ButtonIcon={IC_CAMERA}
          onPress={this.showActionSheet}
          onImagePress={(i: number) => {
            this.setState({
              ...this.state,
              currentIndexImage: i,
              isModalVisible: true,
            });
          }}
          imageUrls={this.state.imagesSource.length === 0 ? [] : this.state.imagesSource }
        />
        <SectionJobDetail
          titleHeader={getString('jobDetail', 'address')}
          Content={
            () => (<Map locationTitle={mockJobData[0].location as string} />)}
        />
        <SectionJobDetail
          titleHeader={getString('jobDetail', 'time')}
          Content={
            () => (
              <DividedBox
                titleData={TitleTimeData}
                contentData={mockdataTime}
              />
            )}
        />
        <SectionJobDetail
          titleHeader={getString('jobDetail', 'details')}
          Content={
            () => (
              <DividedBox
                titleData={TitleDetailsOneData}
                contentData={mockdataDetailsOne}
              />
            )}
        />
        <SectionJobDetail
          Content={
            () => (
              <GridBox
                titleData={TitleDetailsTwoData}
                contentData={mockdataDetailsTwo}
              />
            )}
        />
        <SectionJobDetail
          titleHeader={getString('jobDetail', 'comments')}
          Content={
            () => (
              <DisplayBox
                contentData={' Lorem ipsum dolor sit amet, cat. '}
              />
            )}
        />
        <WrapperFooter>
          <ExtendFooterBox />
          <WrapperButton >
            <ButtonUI
              title={getString('jobList', 'createTimeSheet')}
              onPress={() => this.props.navigation.navigate(RouteName.CREATE_TIMESHEET)}
              type={Types.SUBMIT}
            />
          </WrapperButton>
          <ExtendFooterBox />
        </WrapperFooter>
        <ActionSheet
          ref={(o) => { this.ActionSheet = o; }}
          title={'Choose image'}
          options={optionsMenu}
          cancelButtonIndex={0}
          destructiveButtonIndex={4}
          onPress={(index) => {
            if (index === 1) {
              this.showCamera();
            }
            if (index === 2) {
              this.showGallery();
            }
          }}
        />
        <Modal visible={this.state.isModalVisible} transparent={true}>
          <ImageViewer
            imageUrls={this.state.imagesSource.length === 0 ? [] : this.state.imagesSource }
            backgroundColor='white'
            index={this.state.currentIndexImage}
            onChange={(index) => {
              index as number < this.state.imagesSource.length && this.setState({
                ...this.state,
                currentIndexImage: index as number,
              });
            }}
            footerContainerStyle={{
              bottom: convertHeight(50),
              right: convertWidth(30),
              position: 'absolute',
              zIndex: 9999,
            }}
            renderFooter={() => {
              return (
                <View>
                  <TouchableOpacity onPress={this.handleRemoveImage}>
                    <Image source={TRASH_ICON} />
                  </TouchableOpacity>
                </View>
              );
            }}
            enableSwipeDown
            onSwipeDown={() => {
              this.setState({
                ...this.state,
                isModalVisible: false,
              });
            }}
          />
        </Modal>
      </ScrollView>
    );
  }
}
