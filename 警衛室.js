import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    marginHorizontal: 16,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    justifyContent: 'left',
    marginHorizontal: 16,
    backgroundColor: '#DCDCDC',
  },
  title: {
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
const Separator = () => <View style={styles.separator} />;
const App = () => (
  <SafeAreaView style={styles.background}>
    <View>
      <Text style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
        警衛室
      </Text>
      <TouchableOpacity
        onPress={() =>navigation.navigate('')}
        style={{
          width: '10%',
          backgroundColor: 'skyblue',
          position: 'absolute',
          left: 20,
        }}>
        <Text style={styles.title}>返回</Text>
      </TouchableOpacity>
    </View>
    <Separator />

    <View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            公車
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            到站時間
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             132                                          到達中             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
     <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
            172                                          8分鐘             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
     <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             9025A                                    17:52             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             133                                         18:00             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             台聯大                                      18:00             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             173                                         末班已過             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
  </SafeAreaView>
);

export default App;
