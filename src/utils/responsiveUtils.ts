import { Dimensions, PixelRatio } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const dpi = PixelRatio.get();

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

/**
 * Returns true of the screen is in landscape mode
 */
const isLandscape = () => {
  const dim = Dimensions.get('window');
  return dim.width >= dim.height;
};

const isLandScapeFlag = isLandscape();

const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;

const relativeWidth = (ratio: any) => (isLandScapeFlag ? hp(ratio) : wp(ratio));

const relativeHeight = (ratio: any) => (isLandScapeFlag ? wp(ratio) : hp(ratio));

const relativeFontSize = (fontSize: any) => {
  const fontSizeDpi = fontSize / dpi;
  return PixelRatio.getPixelSizeForLayoutSize(fontSizeDpi);
};

export default {
  relativeWidth, relativeHeight, relativeFontSize, myWidth, myHeight, isLandscape, isPortrait, isLandScapeFlag,
};
