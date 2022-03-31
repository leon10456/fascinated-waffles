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
        <b>中大湖</b>
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
            <b>公車</b>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            <b>到站時間</b>
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
             <b>132</b>                                          <b>到達中</b>             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
     <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             <b>172</b>                                          <b>8分鐘</b>             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
     <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             <b>9025A</b>                                    <b>17:52</b>             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             <b>133</b>                                         <b>18:00</b>             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             <b>台聯大</b>                                      <b>18:00</b>             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
             <b>173</b>                                         <b>末班已過</b>             
        </Text>
      </TouchableOpacity>
    </View>
    <Separator />
  </SafeAreaView>
);

export default App;
