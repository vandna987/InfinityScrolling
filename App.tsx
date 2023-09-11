// import { View, Text, FlatList, ActivityIndicator,ScrollView } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Card from './src/Card'
// import axios from 'axios'
// //https://randomuser.me/api/?page=3&results=10
// const App = () => {
//   const[user,setUser] = useState([]);
//   const [page, setPage] = useState(1);
 

//   const getUsers = async () => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
//     );
//     const data = await res.json();
    
//     setUser((prev)=>[...prev,...data])     //(prev) => [...prev, ...data]);
   
//     // console.log( "data" ,user);
//   };

//   useEffect(() => {
//     getUsers();
//   }, [page]);

//   const renderLoader = () => {
//     return (
//       <View>
//         <ActivityIndicator size={'large'} color={'#aaa'} />
//      </View>
//     )
//   }

//   const loadMoreItem = () => {
//     // console.log('loadMoreItm');
//     setPage(page+1);
//   }
  

//   const renderItem = ({item}) =>{
   
//       return(
//         // <View>
//         // <Text>
//         //   `${item.id}`
//         // </Text>
       
//         // </View>

       
//         <Card
//           title="Sample Card"
//           imageSource="https://example.com/sample-image.jpg"
//           description="This is a sample card component in React Native."
//           onPress={() => {
//             // Handle card press event here
//           }}
//         />
    
        
//       )
//   }
//   return (
//     <FlatList 
//     data={user} 
//     renderItem={renderItem}
//      keyExtractor={item=>item.id}
//      ListFooterComponent={renderLoader}
//      onEndReached={loadMoreItem}
//     >

//     </FlatList>

   
//   )
// }

// export default App

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Card from './src/Card';
import axios from 'axios';

const App: React.FC = () => {
  const [user, setUser] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  const getUsers = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
      );
      const data = await res.json();
      setUser((prev) => [...prev, ...data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  };

  const loadMoreItem = () => {
    setPage(page + 1);
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Card
        title="Sample Card"
        imageSource="https://t4.ftcdn.net/jpg/05/54/52/13/360_F_554521329_ngmDQSjSrUSRnbK2xK0bkcprsinG9Xdv.jpg"
        description= {item.body}//"This is a sample card component in React Native."
        onPress={() => {
          // Handle card press event here
        }}
      />
    );
  };

  return (
    <FlatList
      data={user}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={renderLoader}
      onEndReached={loadMoreItem}
    />
  );
};

export default App;
