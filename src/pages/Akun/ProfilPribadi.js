import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import dumypp from '../../assets/dumphotos.png'
import HeaderProfile from '../../component/Header/HeaderProfile'
import SquareProfile from '../../component/Square/SquareProfile'

const ProfilPribadi = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderProfile title="Profil Karyawan" desc="Pribadi" />
      <ScrollView>


      <View style={{padding: 16}}>
        <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={dumypp} />
            </View>
            <View style={{flex: 1}}>
            <SquareProfile text="41341413" title="NIK" />
            <SquareProfile text="2005 - 01 - 01" title="TBM" />
            </View>
        </View>
        <View>
        <SquareProfile text="Veronica Yuliana, Amd.Kep " title="Nama" />
        <SquareProfile text="1999 - 11 - 20" title="Tanggal Lahir" />
        <SquareProfile text="41341413" title="No. Telepon" />
        <SquareProfile text="41341413" title="Email" />
        <SquareProfile text="41341413" title="NPWP" />

        <SquareProfile text="41341413" title="PTKP" />
        <SquareProfile text="41341413" title="Jamsostek" />

        <SquareProfile text="41341413" title="Jabatan" />



        </View>
        
      </View>
      </ScrollView>
    </View>
  )
}

export default ProfilPribadi

const styles = StyleSheet.create({})