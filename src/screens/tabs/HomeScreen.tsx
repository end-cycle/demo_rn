// import React, { useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

// const HomeScreen = () => {
//   // 假设您有一组图片的数据，可以从后端获取或自己定义r
//   const [imageData, setImageData] = useState([
//     { id: '1', imageUrl: 'https://images.dog.ceo/breeds/terrier-border/n02093754_7908.jpg' },
//     { id: '2', imageUrl: 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2889.jpg' },
//     { id: '3', imageUrl: 'https://images.dog.ceo/breeds/otterhound/n02091635_2958.jpg' },
//     // 添加更多图片数据...
//   ]);

//   // 计算瀑布流布局的列数
//   const numColumns = 2;

//   // 获取屏幕宽度
//   const screenWidth = Dimensions.get('window').width;

//   // 计算每列图片的宽度
//   const columnWidth = screenWidth / numColumns;

//   // 渲染单个图片项
//   const renderItem = ({ item }) => {
//     return (
//       <Image source={{ uri: item.imageUrl }} style={[styles.imageItem, { width: columnWidth }]} />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>图片瀑布</Text>
//       <FlatList
//         data={imageData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={numColumns}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   imageItem: {
//     height: 150, // 设置图片高度，可根据实际需求调整
//     margin: 5,
//   },
// });

// export default HomeScreen;

import * as React from 'react';
import { Dimensions, Image, RefreshControl, Text, View } from 'react-native';
import { IColumnsHandles } from 'react-native-waterflow-list/src/Columns';
import WaterFlow from 'react-native-waterflow-list/src/';

const width = (Dimensions.get('screen').width - 30) / 2;

const getItemData = (() => {
  let id = 0;
  return () => {
    id++;
    const height = Math.ceil(Math.random() * 1000);
    return {
      id,
      text: Math.random(),
      image_path: `https://picsum.photos/${width}/${height}/?random`,
      height,
      width,
    };
  };
})();

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const itemDataFactory = () =>
  Array(10)
    .fill('')
    .map(() => getItemData());

interface IItem {
  id: number
  [index: string]: any
}

export default () => {
  const [data, setData] = React.useState<IItem[]>([]);
  const [loading, setLoading] = React.useState(false)

  const WaterFlowRef = React.useRef<IColumnsHandles>()
  const onLoadMore = React.useCallback(async () => {
    setLoading(true)
    await sleep(1000);
    setLoading(false)
    return setData(data.concat(itemDataFactory()));
  }, [data]);
  const loadData = React.useCallback(async () => {
    await sleep(1000);
    return setData(itemDataFactory());
  }, [data])

  React.useEffect(() => {
    setData(itemDataFactory());
  }, []);

  return (
    <WaterFlow
      ref={WaterFlowRef}
      data={data}
      keyForItem={item => item.id}
      numColumns={2}
      onEndReached={onLoadMore}
      columnFlatListProps={{
        style: { marginHorizontal: 5, },
      }}
      columnsFlatListProps={{
        ListHeaderComponent: () => <View><Text style={{alignSelf: 'center',marginTop:10}}>图片瀑布流</Text></View>,
        refreshControl: <RefreshControl
          style={{ zIndex: 10 }}
          refreshing={loading}
          onRefresh={() => {
            WaterFlowRef.current?.clear()
            loadData()
          }}
          tintColor={'gray'}
        />
        ,
        style: { marginHorizontal: 10, },
      }}
      renderItem={({ item, index }) => {
        return renderItem(item);
      }}
    />
  );
};

const renderItem = item => {
  return (
    <View style={{ marginHorizontal: 5, paddingTop: 10 }}>
      <Image style={{ height: item.height, width: `100%` }} source={{ uri: item.image_path }} />
      <Text>ID:{item.id}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};