import React,{useEffect} from 'react';
import { View, Text ,StyleSheet ,FlatList, Image, TouchableOpacity} from 'react-native';
import { FAB,Appbar, Provider as PaperProvider } from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getTickets} from '../redux/actions';

 
export default function HomeScreen({navigation}) {
    const {tickets} = useSelector(state => state.ticketsReducer);
    const dispatch = useDispatch();
    const fetchTickets = () => dispatch(getTickets());
    useEffect(() => {
    fetchTickets();
  }, []);
  //...
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <FlatList
        data={tickets}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            (<Card
                image={item.vehicleRegNo}
                title={item.numberOfVehicles}
                time={item.amount}
            />)
          );
        }}
        showsVerticalScrollIndicator={false}
      />



        <FAB
            style={styles.fabStyle}
            animated={true}
            color='white'
            disabled={false}
            visible={true}
            loading={false}
            onLongPress={() => navigation.navigate('NewTicket')}
            small
            icon="plus"
            onPress={() => navigation.navigate('NewTicket')}
          />
      </View>
    );
  }

  const Card = (props) => {
    return (
        
        <View style={styles.card}>
            <LikeButton/>
            <Image style={styles.image} source={{uri: props.image}}/>
            
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.time}>{props.time}</Text>
        </View>
            
        
    )
}

  const styles = StyleSheet.create({

    screenText:{
        color: '#FFFFFF', 
        fontSize: 30,
        textAlign: 'center'
      },

    fabStyle: {
      position: 'absolute',
      margin: 25,
      right: 0,
      bottom: 0,
      backgroundColor: '#17c261',
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    card:{
        marginVertical:15,
        width:'100%',
        borderRadius:35,
        backgroundColor:'black',

    },
   
  });