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
import { ImageSwiper } from "@blesfia/react-native-image-swiper";
```

## Basic Usage

```jsx
<ImageSwiper
  imageProps={{ style: { height: 800 } }}
  images={[
    "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
    "https://images.unsplash.com/photo-1555149385-c50f336e28b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  ]}
/>
```

# Configuration - Props
Go to https://github.com/Blesfia/react-native-image-swiper/blob/master/lib/index.tsx#L15
