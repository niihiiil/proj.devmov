import { StyleSheet, Text, View } from 'react-native';

function Title1() {
  return (
    <View style={styles.container}>
      <Text>t1</Text>
    </View>
  );
}
function Title2() {
    return (
      <View style={styles.container}>
        <Text>t2</Text>
      </View>
    );
}

export{Title1,Title2}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
