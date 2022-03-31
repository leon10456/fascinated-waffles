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
        <b>133</b>
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
            <b>06:15</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>06:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>06:45</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>07:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>07:15</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>08:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>07:45</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>09:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>08:15</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>10:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>09:15</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>11:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>10:15</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>13:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>11:45</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>15:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>12:45</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>16:40</b>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>14:15</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          </Text>   
      </View>
      <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>15:15</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          </Text>   
      </View>
      
    </View>
    <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>16:15</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          </Text>   
      </View>
      
    
    <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>16:45</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          </Text>   
      </View>
    <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>17:20</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          </Text>   
      </View>
    <View style={styles.fixToText}>
       
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
            <b>18:20</b>
          </Text>
          <Text style={{ textAlign: 'center',width: '50%', backgroundColor: 'white' }}>
          </Text>   
      </View>
      
    
    <Text style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <b>上次更新:2022/03/10</b>
      </Text>
    
  </SafeAreaView>
);

export default App;
