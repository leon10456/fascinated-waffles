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
        <b>132公車時刻表</b>
      </Text>
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
    <Separator />
     <Text style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <b>往中央大學</b>
      </Text>
    <View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>平日</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>假日</b>
          </Text>
        
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>06:30</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>06:20</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>07:00</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>07:00</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>08:00</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>07:20</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>08:30</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>08:00</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>09:00</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>08:20</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>09:30</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>09:00</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>10:00</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>09:20</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>10:30</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>10:00</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>11:00</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>10:20</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>11:30</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>11:00</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>12:00</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>11:20</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>12:25</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>12:00</b>
          </Text>   
      </View>
    </View>
    
    <Text style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <b>上次更新:2022/03/10</b>
      </Text>
    
  </SafeAreaView>
);

export default App;
