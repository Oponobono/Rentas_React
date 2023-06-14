import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containercar:{
      flex: 1,
      padding: 16,
      alignItems: 'stretch',
      justifyContent: 'space-around',
      marginStart: 10,
      marginEnd: 30,
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 16,
      flex: 1,
      marginRight: 8,
    },
    cell: {
      fontSize: 16,
      flex: 1,
      marginRight: 8,
    },
});