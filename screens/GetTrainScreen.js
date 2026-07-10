import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const GetTrainScreen = () => {
    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 65, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a' }}>Get Train Screen</Text>
            </View>

            <ScrollView style={{ marginTop: 10, }} showsVerticalScrollIndicator={false}>

                <View>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', height: 150, backgroundColor: '#4ADE80', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                    </View>
                </View>

                <View>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', height: 150, backgroundColor: '#4ADE80', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                    </View>
                </View>

                <View>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', height: 150, backgroundColor: '#4ADE80', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                    </View>
                </View>

                <View>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', height: 150, backgroundColor: '#4ADE80', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                    </View>
                </View>

                <View>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', height: 150, backgroundColor: '#4ADE80', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default GetTrainScreen

const styles = StyleSheet.create({})