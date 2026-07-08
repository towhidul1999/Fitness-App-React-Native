import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const GetTrainScreen = () => {
    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 65, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a' }}>Get Train Screen</Text>
            </View>

            <ScrollView style={{ marginTop: 10, }}
                showsVerticalScrollIndicator={false}
            >

                <View>
                    <View style={{ height: 150, backgroundColor: 'red', marginBottom: 10, borderRadius: 12 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a', marginBottom: 10 }}>
                        Get Train Screen
                    </Text>
                </View>

                <View style={{ borderRadius: 12 }}>
                    <View style={{ height: 150, backgroundColor: 'red', marginBottom: 10, borderRadius: 12 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a', marginBottom: 10 }}>
                        Get Train Screen
                    </Text>
                </View>

                <View style={{ borderRadius: 12 }}>
                    <View style={{ height: 150, backgroundColor: 'red', marginBottom: 10, borderRadius: 12 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a', marginBottom: 10 }}>
                        Get Train Screen
                    </Text>
                </View>

                <View style={{ borderRadius: 12 }}>
                    <View style={{ height: 150, backgroundColor: 'red', marginBottom: 10, borderRadius: 12 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a', marginBottom: 10 }}>
                        Get Train Screen
                    </Text>
                </View>

            </ScrollView>
        </View>
    )
}

export default GetTrainScreen

const styles = StyleSheet.create({})