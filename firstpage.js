import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 16,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
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
function First({ navigation }) {
  return (
  <SafeAreaView style={styles.background}>
    <ScrollView style={styles.scrollView}>
    <View>
      <Text style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
        公車動態
      </Text>
      <TouchableOpacity
        onPress={() =>Alert.alert('Left button pressed')}
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
          onPress={() =>navigation.navigate('Second')}
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
        onPress={() => navigation.navigate('Bus132')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={{textAlign: 'left'}}>
        132                            警衛室|3min
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
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Bus172')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={{textAlign: 'left'}}>
          172                            警衛室|3min
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
        onPress={() => navigation.navigate('Bus9025A')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={{textAlign: 'left'}}>
          9025                          警衛室|3min
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
        onPress={() => navigation.navigate('Bus133')}
        style={{ width: '100%', backgroundColor: 'white' }}>
        <Text style={{textAlign: 'left'}}>
          133                            警衛室|3min
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
    </ScrollView>
  </SafeAreaView>
  );
}

export default First;
