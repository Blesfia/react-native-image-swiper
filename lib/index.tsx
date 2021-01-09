import * as React from "react";
import {
  Image,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollViewProps,
  ImageProps,
} from "react-native";

const ScreenWidth = Dimensions.get("window").width;

type Event = (data: { currentPage: number; uri: string }) => void;
interface IProps {
  images?: string[];
  onPageSelected?: Event;
  initialPage?: number;
  scrollViewProps?: React.Component<ScrollViewProps>;
  imageProps?: React.Component<ImageProps>;
  onSwipeTop?: Event;
  onSwipeBottom?: Event;
  ImageComponent: any;
}

export const ImageSwiper = ({
  onPageSelected,
  initialPage,
  images = [],
  onSwipeBottom,
  onSwipeTop,
  ImageComponent = Image,
  scrollViewProps,
  imageProps,
}: IProps) => {
  const scrollViewRef = React.createRef<ScrollView>();
  const [currentPage, setCurrentPage] = React.useState(initialPage ?? 1);

  const scrollToInitialPosition = () => {
    scrollViewRef.current?.scrollTo({
      x: ScreenWidth * (currentPage - 1),
    });
  };

  const onScrollEndDrag = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
    uri: string
  ) => {
    if (e.nativeEvent.contentOffset.y < 0) {
      onSwipeBottom?.({ currentPage, uri });
    } else {
      onSwipeTop?.({ currentPage, uri });
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // ? calculate screenIndex by contentOffset and screen width
    const newPage = parseInt(
      (
        event.nativeEvent.contentOffset.x / Dimensions.get("window").width
      ).toString()
    );
    if (currentPage !== newPage) {
      setCurrentPage(newPage);
      onPageSelected?.({ currentPage, uri: images[currentPage] });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      alwaysBounceHorizontal
      onScroll={onScroll}
      scrollEventThrottle={5}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
      onLayout={scrollToInitialPosition}
      {...(scrollViewProps ?? {})}
    >
      {images.map((uri: string, index: number) => {
        return (
          <ScrollView
            key={index}
            onScrollEndDrag={(e) => onScrollEndDrag(e, uri)}
          >
            <ImageComponent
              source={{ uri }}
              {...(imageProps ?? {})}
            />
          </ScrollView>
        );
      })}
    </ScrollView>
  );
};
