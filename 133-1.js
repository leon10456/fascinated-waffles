import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
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
    marginVertical: 1,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
const Separator = () => <View style={styles.separator} />;
const App = () => (
  <SafeAreaView style={styles.background}>
    <View>
      <Text style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
        <b>133</b>
      </Text>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{
          width: 'ˇ0%',
          backgroundColor: 'yellow',
          position: 'absolute',
          right: 20,
        }}>
        <Text style={styles.title}>發車時刻表</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('Left button pressed')}
        style={{
          width: '30%',
          backgroundColor: '',
          position: 'absolute',
          left: 0,
        }}>
        <Text style={styles.title}>返回</Text>
      </TouchableOpacity>
    </View>
    

    <View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            <b>往中央大學</b>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Left button pressed')}
          style={{ width: '50%', backgroundColor: 'white' }}>
          <Text style={styles.title}>
            <b>往中壢公車站</b>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Separator />
    <View style={styles.fixToText}>
      
        <Text style={{textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          <b>16:00</b> 
        </Text>
        <Text style={ {textAlign: 'center',width: '50%', backgroundColor: 'white' }}><b>中壢公車站</b></Text>

    </View>
    <Separator />
    <View style={styles.fixToText}>
      
        <Text style={{textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          <b>16:00</b> 
        </Text>
        <Text style={ {textAlign: 'center',width: '50%', backgroundColor: 'white' }}><b>第一銀行</b></Text>

    </View>
    <Separator />
    <View style={styles.fixToText}>
      
        <Text style={{textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          <b>16:01</b> 
        </Text>
        <Text style={ {textAlign: 'center',width: '50%', backgroundColor: 'white' }}><b>第一市場</b></Text>

    </View>
    <Separator />
    <View style={styles.fixToText}>
      
        <Text style={{textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          <b>16:02</b> 
        </Text>
        <Text style={ {textAlign: 'center',width: '50%', backgroundColor: 'white' }}><b>河川教育中心</b></Text>

    </View>
    <Separator />
    <View style={styles.fixToText}>
      
        <Text style={{textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          <b>16:02</b> 
        </Text>
        <Text style={ {textAlign: 'center',width: '50%', backgroundColor: 'white' }}><b>舊社</b></Text>

    </View>
    <Separator />
    <View style={styles.fixToText}>
      
        <Text style={{textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          <b>16:04</b> 
        </Text>
        <Text style={ {textAlign: 'center',width: '50%', backgroundColor: 'white' }}><b>新民國中</b></Text>

    </View>
    <Separator />
    <View style={styles.fixToText}>
      
        <Text style={{textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          <b>16:04</b> 
        </Text>
        <Text style={ {textAlign: 'center',width: '50%', backgroundColor: 'white' }}><b>廣興</b></Text>

    </View>
    <Separator />
  </SafeAreaView>
);

export default App;
