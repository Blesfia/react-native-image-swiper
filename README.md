<h1>Minimal React Native Image Swiper</h1>
<p align="center">
  <img alt="React Native Image Swiper"
        src="assets/Screenshots/React-Native-Image-Swiper.gif" />
</p>

# Installation

Add the dependency:

```bash
npm i @blesfia/react-native-image-swiper
```

## Peer Dependencies

###### IMPORTANT! You need install them

```json
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

# Usage

## Import

```jsx
import ImageSwiper from "@blesfia/react-native-image-swiper";
```

## Basic Usage

```jsx
<ImageSwiper
  imageHeight={700}
  images={[
    {
      uri:
        "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1555149385-c50f336e28b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    },
  ]}
/>
```

# Configuration - Props

| Property       |   Type    |   Default    | Description                                                                                              |
| -------------- | :-------: | :----------: | -------------------------------------------------------------------------------------------------------- |
| images         |   array   |  []   | the main data of image swiper                                                                            |
| ImageComponent | component |    Image     | set your own Image component such as `FastImage`                                                         |
| onPageSelected | Function  |  undefined   | handle the selected page with this function                                                              |
| imageHeight    |  number   | ScreenHeight | change the image height                                                                                  |
| imageWidth     |  number   | ScreenWidth  | image width is changable but not recommended! You will broke the image swiper's horizontal swipe feature |
| onSwipeTop     | Function  |  undefined   | handle when the user swipe top on the image                                                              |
| onSwipeBottom  | Function  |  undefined   | handle when the user swipe bottom on the image                                                           |
