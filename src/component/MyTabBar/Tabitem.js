import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import ICSF from '../../assets/icpresensiactive.svg'
import ICSR from '../../assets/icpresensinon.svg'
import ICHF from '../../assets/pengajuanactive.svg'
import ICHR from '../../assets/pengajuannon.svg'
import ICIF from '../../assets/laporanactive.svg'
import ICIR from '../../assets/laporannon.svg'
import ICAKT from '../../assets/akunactive.svg'
import ICNON from '../../assets/akunnon.svg'

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title == 'Presensi') {
      return active ?  <ICSF size={40} /> :  <ICSR size={40} />;
    }
    if (title == 'Pengajuan') {
        return active ?   <ICHF size={40} /> :  <ICHR size={40} />;
      }
    if (title == 'Laporan') {
      return active ? <ICIF size={40} /> :  <ICIR size={40} />;
    } 
    if (title == 'Akun') {
      return active ? <ICAKT size={40} /> :  <ICNON size={40} />;
    } 
    return  <Icon name='area-chart' color="#1A5D98" size={20} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'space-between'},
  text: (active) => ({
    fontSize: 10,
    marginTop: -3,
    color: active ? '#1A5D98' : 'grey',


  
  }),
})