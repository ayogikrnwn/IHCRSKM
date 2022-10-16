// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import MyTabBar from '../component/MyTabBar';
import AkunDashboard from '../pages/Akun/AkunDashboard';
import MedicalCheck from '../pages/Akun/MedicalCheck';
import ProfilPribadi from '../pages/Akun/ProfilPribadi';
import Home from '../pages/Home';
import ScanPresensi from '../pages/Home/ScanPresensi';
import DetailPayslip from '../pages/Laporan/DetailPayslip';
import LaporanDashboard from '../pages/Laporan/LaporanDashboard';
import LaporanDPMK from '../pages/Laporan/LaporanDPMK';
import LaporanPayslip from '../pages/Laporan/LaporanPayslip';
import PinjamanDashboard from '../pages/Laporan/PinjamanDashboard';
import Login from '../pages/Login';
import FormPengajuan from '../pages/Pengajuan/FormPengajuan';

import PengajuanDashboard from '../pages/Pengajuan/PengajuanDashboard';



// import Login from '../screen/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MyTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Presensi" component={Home} />
      <Tab.Screen name="Pengajuan" component={PengajuanDashboard} />
      <Tab.Screen name="Laporan" component={LaporanDashboard} />
      <Tab.Screen name="Akun" component={AkunDashboard} />
     

    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
       <Stack.Screen
      name="MyTabs"
      component={MyTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
   <Stack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
 <Stack.Screen
      name="FormPengajuan"
      component={FormPengajuan}
      options={{headerShown: false}}
    />
     <Stack.Screen
      name="ScanPresensi"
      component={ScanPresensi}
      options={{headerShown: false}}
    />
 <Stack.Screen
      name="Laporan_DPMK"
      component={LaporanDPMK}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="DetailPayslip"
      component={DetailPayslip}
      options={{headerShown: false}}
    />
       <Stack.Screen
      name="LaporanPayslip"
      component={LaporanPayslip}
      options={{headerShown: false}}
    />
      <Stack.Screen
      name="PinjamanDashboard"
      component={PinjamanDashboard}
      options={{headerShown: false}}
    />
     <Stack.Screen
      name="MedicalCheck"
      component={MedicalCheck}
      options={{headerShown: false}}
    />
     <Stack.Screen
      name="ProfilPribadi"
      component={ProfilPribadi}
      options={{headerShown: false}}
    />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})