import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderSecondary from '../../component/Header/HeaderSecondary'
import Accordion from 'react-native-collapsible/Accordion';
import ICExpand from '../../assets/expand.png'

const DetailPayslip = () => {

 
  return (
    <View style={{flex: 1}}>
         <HeaderSecondary title="Payslip Reguler" desc="Lorem Ipsum"  />
         <ScrollView>
         <View style={{padding: 16}}>
         <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 14, color: '#292929', alignSelf: 'center', fontWeight: 'bold'}}>PT. KRAKATAU MEDIKA</Text>
            <Text style={{fontSize: 12, color: '#808080', alignSelf: 'center'}}>Slip Gaji (Januari 2022)</Text>
        </View>
        <View style={{backgroundColor: '#E6EDF4', justifyContent: 'space-between', height: 240, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 16}}>
            <View>
                <Text style={styles.text}>Nama</Text>
                <Text style={styles.text}>Jabatan</Text>
                <Text style={styles.text}>NIK</Text>
                <Text style={styles.text}>TMB</Text>
                <Text style={styles.text}>Iuran Perusahaan</Text>
               
                <Text style={styles.text}>St. Karyawan</Text>
                <Text style={styles.text}>St. Kel</Text>
                <Text style={styles.text}>Dep/CCC</Text>


            </View>
            <View>
                <Text style={styles.textEnd}>Veronica Yulian</Text>
                <Text style={styles.textEnd}>10021</Text>
                <Text style={styles.textEnd}>10021</Text>
                <Text style={styles.textEnd}>10021</Text>
                <Text style={styles.textEnd}>10021</Text>
               
                <Text style={styles.textEnd}>10021</Text>
                <Text style={styles.textEnd}>10021</Text>

                <Text style={styles.textEnd}>10021</Text>
             


            </View>
        </View>

        <View style={{backgroundColor: '#E6EDF4', justifyContent: 'space-between', height: 80, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 16, marginTop: 10}}>
            <View>
                <Text style={styles.text}>Klasifikasi Golongan</Text>
                <Text style={styles.text}>Grade</Text>
            </View>
            <View>
                <Text style={styles.textEnd}>C</Text>
                <Text style={styles.textEnd}>9</Text>
            </View>
        </View>
        <View style={{backgroundColor: '#E6EDF4', justifyContent: 'space-between', height: 60, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 16, marginTop: 10}}>
            <View>
                <Text style={styles.text}>C. Potongan</Text>
         
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textEnd}>Rp 1.000.000</Text>
                <Image source={ICExpand} style={{
                    marginTop: 5,
                    marginLeft: 5
                }} />
            </View>
        </View>
        <View style={{backgroundColor: '#E6EDF4', justifyContent: 'space-between', height: 60, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 16, marginTop: 10}}>
            <View>
                <Text style={styles.text}>D. Iuran</Text>
         
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textEnd}>Rp 1.000.000</Text>
                <Image source={ICExpand} style={{
                    marginTop: 5,
                    marginLeft: 5
                }} />
            </View>
        </View>
        <View style={{backgroundColor: '#E6EDF4', justifyContent: 'space-between', height: 60, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 16, marginTop: 10}}>
            <View>
                <Text style={styles.text}>E. Natura</Text>
         
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textEnd}>Rp 1.000.000</Text>
                <Image source={ICExpand} style={{
                    marginTop: 5,
                    marginLeft: 5
                }} />
            </View>
        </View>
        <View style={{backgroundColor: '#E6EDF4', justifyContent: 'space-between', height: 60, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 16, marginTop: 10}}>
            <View>
                <Text style={styles.text}>F. Diterima</Text>
         
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textEnd}>Rp 1.000.000</Text>
                <Image source={ICExpand} style={{
                    marginTop: 5,
                    marginLeft: 5
                }} />
            </View>
        </View>
         </View>
         </ScrollView>
   
     
    </View>
  )
}

export default DetailPayslip

const styles = StyleSheet.create({
    text: {fontSize:12, color: '#292929',marginBottom: 10, },
    textEnd: {fontSize:12, color: '#292929',marginBottom: 10, textAlign: 'right'},
    textBold: {fontSize:12, color: '#292929', fontWeight: 'bold'},

})