import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const AnimationScreen = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 65, paddingHorizontal: 20 }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a' }}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a' }}>
                        Animation
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: 5,
                    borderRadius: 12,
                    // padding: 20,
                    // marginHorizontal: 20,
                    width: '100%',
                }}
            >
                <View >
                    {/* <View style={{ height: 200, backgroundColor: 'red', marginBottom: 10, }} /> */}
                    <Video
                        source={require('../Assets/Towhidul_Mobile_App_Deveoper_intro.mp4')}
                        style={{ width: '100%', height: 200 }}
                        controls={true}
                    />

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a', marginBottom: 10 }}>
                        Animation 1
                    </Text>
                </View>

                <View>
                    {/* <View style={{ height: 200, backgroundColor: 'blue', marginBottom: 10 }} /> */}
                    <Video
                        source={require('../Assets/Towhidul_Mobile_App_Deveoper_intro.mp4')}
                        style={{ width: '100%', height: 200 }}
                        controls={true}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a', marginBottom: 10 }}>
                        Animation 2
                    </Text>
                </View>

                <View>
                    {/* <View style={{ height: 200, backgroundColor: 'orange', marginBottom: 10 }} /> */}
                    <Video
                        source={require('../Assets/Towhidul_Mobile_App_Deveoper_intro.mp4')}
                        style={{ width: '100%', height: 200 }}
                        controls={true}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a', marginBottom: 10 }}>
                        Animation 3
                    </Text>
                </View>

                <View>
                    {/* <View style={{ height: 200, backgroundColor: 'green', marginBottom: 10 }} /> */}
                    <Video
                        source={require('../Assets/Towhidul_Mobile_App_Deveoper_intro.mp4')}
                        style={{ width: '100%', height: 200 }}
                        controls={true}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a', marginBottom: 10 }}>
                        Animation 4
                    </Text>
                </View>

            </ScrollView>

        </View>
    )
}

export default AnimationScreen

const styles = StyleSheet.create({})