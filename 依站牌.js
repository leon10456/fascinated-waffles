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
        <Text style={styles.container}>
          警衛室                132|3min
        </Text>
        <Text style={styles.title}> 172|10min</Text>
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
          國鼎圖書館         132|3min{' '}
        </Text>
        <Text style={styles.title}> 172|10min</Text>
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
          中大湖                132|3min
        </Text>
        <Text style={styles.title}>172|10min</Text>
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
          依仁堂                 132|3min
        </Text>
        <Text style={styles.title}> 172|10min</Text>
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
