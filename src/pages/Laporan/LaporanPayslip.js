import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderSecondary from '../../component/Header/HeaderSecondary'
import { Dropdown } from 'react-native-element-dropdown';
import ICSearch from '../../assets/icsearch.png'
import TextWithBorder from '../../component/TextField/TextWithBorder';

const LaporanPayslip = ({navigation}) => {
  const data = [
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' },
    
  
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{flex: 1}}>
        <HeaderSecondary title="Payslip Reguler" desc="Lorem Ipsum"  />
        <ScrollView>

        <View style={styles.content}>
        <Text style={{fontSize: 12, color: 'black'}}>Pilih Tahun</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          
          placeholder={!isFocus ? 'Pilih Tahun' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />

        <Image source={ICSearch} style={{
          height: 40,
          width: 40,
          marginTop: 4
        }} />

        </View>
        <View style={{marginTop: 20}}>
        <TextWithBorder title="Januari - 2022"  onPress={() => navigation.navigate('DetailPayslip')}/>
        <TextWithBorder title="Februari - 2022" />
        <TextWithBorder title="Maret - 2022" />
        <TextWithBorder title="April - 2022" />
        <TextWithBorder title="Mei - 2022" />
        <TextWithBorder title="Juni - 2022" />




        </View>
       
        </View>
        </ScrollView>
       
     
    </View>
  )
}

export default LaporanPayslip

const styles = StyleSheet.create({  
  content: {
    padding: 16,
    
  },
  dropdown: {
    height: 40,
    borderColor: '#B3C9DD',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    width: '85%',
    marginTop: 4
    
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'yellow',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 20,
    fontSize: 14,
    color: 'black'
  },
  placeholderStyle: {
    fontSize: 14,
    color: 'black'
  },
  selectedTextStyle: {
    fontSize: 14,
    backgroundColor: 'white',
    color: 'black'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    
    
  },
})