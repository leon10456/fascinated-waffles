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
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#DCDCDC',
  },
  title: {
    textAlign: 'center',
  },
  title2: {
    textAlign: 'center',
    fontSize:25
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
  <SafeAreaView>
    <Text></Text>
    <Text></Text>
    <View
      style={{
        width: '100%',
        backgroundColor: 'skyblue',
      }}>
        <Text style={styles.title2}>
          公車動態
        </Text>
      <TouchableOpacity
        onPress={() =>navigation.navigate('')}
        style={{
          width: '10%',
          backgroundColor: 'skyblue',
          position: 'absolute',
          right: 20,
        }}>
        <Text style={styles.title}>叉</Text>
      </TouchableOpacity>
    </View>
    <Separator />

    <View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            依班次
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            依站牌
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
          <Text></Text>
          <Text></Text>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'absolute',
          }}>
          <Text style={styles.title}>往桃園高鐵站</Text>
          <Text style={styles.title}>警衛室|3min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{
            width: '20%',
            backgroundColor: 'white',
            position: 'absolute',
            left: 20,
          }}>
          <Text style={styles.title2}>132</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button press')}
          style={{
            width: '10%',
            backgroundColor: 'white',
            position: 'absolute',
            right: 20,
          }}>
          <Text style={styles.title}>心</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button press')}
          style={{
            width: '10%',
            backgroundColor: 'white',
            position: 'absolute',
            right: 20,
            bottom: 0,
          }}>
          <Text style={styles.title}>加</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
          172                  警衛室|3min{' '}
        </Text>
        <Text style={styles.title}>往桃園高鐵站</Text>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{
            width: '10%',
            backgroundColor: 'white',
            position: 'absolute',
            right: 20,
          }}>
          <Text style={styles.title}>心</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{
            width: '10%',
            backgroundColor: 'white',
            position: 'absolute',
            right: 20,
            bottom: 0,
          }}>
          <Text style={styles.title}>加</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
          9025               警衛室|3min
        </Text>
        <Text style={styles.title}>往松山機場  </Text>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{
            width: '10%',
            backgroundColor: 'white',
            position: 'absolute',
            right: 20,
          }}>
          <Text style={styles.title}>心</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{
            width: '10%',
            backgroundColor: 'white',
            position: 'absolute',
            right: 20,
            bottom: 0,
          }}>
          <Text style={styles.title}>加</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={styles.container}>
          133                 警衛室|3min
        </Text>
        <Text style={styles.title}>往中壢公車站</Text>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{
            width: '10%',
            backgroundColor: 'white',
            position: 'absolute',
            right: 20,
          }}>
          <Text style={styles.title}>心</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{
            width: '10%',
            backgroundColor: 'white',
            position: 'absolute',
            right: 20,
            bottom: 0,
          }}>
          <Text style={styles.title}>加</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
    <Separator />
  </SafeAreaView>
);

export default App;
