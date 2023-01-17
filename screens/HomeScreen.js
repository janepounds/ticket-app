import React,{useEffect} from 'react';
import { View, Text ,StyleSheet ,FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { FAB,Appbar, Provider as PaperProvider } from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getTickets} from '../redux/actions';
import { Card , LikeButton,Title,Headline,Button,Searchbar} from 'react-native-paper';


const TicketCard = ({BookingId, amount,status,vehicleNo,plateNo}) => {
    console.log(plateNo)
    return (
        <Card style={styles.ticketCard}>
            <View style={styles.ticketWrapper}>
                <View style={{flex: 1,}}>    
                    <Text>Ticket Number: {BookingId}</Text>
                    <Text>Amount: UGX{amount}</Text>
                    <Text>Status: {status}</Text>
                    <Text>No of Vehicles: {vehicleNo}</Text>
                    <Text>Number Plates: {(plateNo).toString()}</Text>
                </View>

                <View>
                <TouchableOpacity style={styles.button}>
                 <Text>View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                    <Text>Verify Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </Card>
    );
}
 
const HomeScreen = ({navigation}) =>  {
    const {tickets} = useSelector(state => state.ticketsReducer);
    const dispatch = useDispatch();
    const fetchTickets = () => dispatch(getTickets());
    
    useEffect(() => {
        fetchTickets();
    }, []);

    const _renderItem = ({item}) => (
        <TicketCard
            BookingId={item.booking.bookingId}
            amount={item.amount}
            status = {((item.booking.bookingStatus).toString()) === "60" ? "Pending" : (((item.booking.bookingStatus).toString()) === "80" ? "Cancelled" : "Paid")}
            vehicleNo = {item.numberOfVehicles}
            plateNo = {(item.vehicleRegNo)}
        />
    )

    const emptyComponent = () => {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 16, }}>No tickets for now</Text>
            </View>
        );
    }

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.header}>Tickets</Text>
            <Searchbar style ={styles.search}
                placeholder="Search Tickets"
                onChangeText={onChangeSearch}
                value={searchQuery}
                />
            <FlatList
                data={tickets}
                renderItem={_renderItem}
                keyExtractor={(item,index) => (`${index}id${Date.now()}`).toString()}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={emptyComponent}
                contentContainerStyle={styles.flatListStyle}
                //ListHeaderComponent={_headerComponent}
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
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#eee',
        paddingVertical: 20,
    },
    header: {
        fontSize: 26,
        marginLeft: 20,
        fontWeight: '700',
        marginBottom: 20,
    },
    flatListStyle: {
        flexGrow: 1,
        paddingHorizontal: 20,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    ticketCard: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 16,
        borderRadius: 5,
        backgroundColor: '#DFE7F5',
        elevation: 0,    
    },
    ticketWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    fabStyle: {
        position: 'absolute',
        right: 20,
        top: 10,
        backgroundColor: '#10ac84',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#c8d6e5',
        padding: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 16,
        borderRadius: 5,
      },
    search: {
        //paddingHorizontal: 20,
        //marginLeft: 10
        marginHorizontal: 20,
        marginBottom: 16,
        borderRadius: 30

    }
});