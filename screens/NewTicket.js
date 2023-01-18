import React from 'react';
import { View, Text ,StyleSheet,ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper'
import {FormBuilder} from 'react-native-paper-form-builder';

export default function NewTicket() {
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
    return (
      <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Create New Ticket</Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              name: 'ticketNo',
              type: 'text',

              rules: {
                required: {
                  value: true,
                  message: 'Ticket Number is required',
                },
              },
              textInputProps: {
                label: 'Ticket Number',
              },
            },
            {
              name: 'vehicleNo',
              type: 'text',

              rules: {
                required: {
                  value: true,
                  message: 'Number of Vehicles is required',
                },
              },
              textInputProps: {
                label: 'Number Of Vehicles',
              },
            },
            {
              type: 'text',
              name: 'plateNo',
              rules: {
                required: {
                  value: true,
                  message: 'Plate Number is required',
                },
              },
              textInputProps: {
                label: 'Plate Numbers',
              },
            },
            {
              type: 'text',
              name: 'totalAmount',
              rules: {
                required: {
                  value: true,
                  message: 'Total Amount is required',
                },
              },
              textInputProps: {
                label: 'Total',
              },
            },
          ]}
        />
        <Button
          mode={'contained'}
          onPress={handleSubmit((data: any) => {
            console.log('form data', data);
          })}>
          Generate
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});
