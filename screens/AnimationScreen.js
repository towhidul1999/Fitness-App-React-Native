import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const AnimationScreen = () => {
    return (
        <View style={{ flex: 1 }}>
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
                <View style={{
                    backgroundColor: '#1f2965',
                    // borderRadius: 16,
                    overflow: 'hidden',
                    // marginBottom: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    elevation: 5,
                }}>
                    {/* <View style={{ height: 200, backgroundColor: 'red', marginBottom: 10, }} /> */}
                    <Video
                        source={require('../Assets/Towhidul_Mobile_App_Deveoper_intro.mp4')}
                        style={{ width: '100%', height: 200, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                        controls={true}
                        autoPlay={false}
                    />

                    <View style={{ padding: 16 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#00FF6A', marginRight: 8 }} />
                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#FFFFFF' }}>
                                Animation 1
                            </Text>
                        </View>

                        <Text style={{ fontSize: 14, color: '#A1A1AA', lineHeight: 20 }}>
                            This is a sample animation description. You can add more details about the animation here.
                        </Text>
                    </View>
                </View>

                <View style={{
                    backgroundColor: '#1f2965',
                    // borderRadius: 16,
                    overflow: 'hidden',
                    // marginBottom: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    elevation: 5,
                }}>
                    {/* <View style={{ height: 200, backgroundColor: 'red', marginBottom: 10, }} /> */}
                    <Video
                        source={require('../Assets/Towhidul_Mobile_App_Deveoper_intro.mp4')}
                        style={{ width: '100%', height: 200, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                        controls={true}
                        autoPlay={false}
                    />

                    <View style={{ padding: 16 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#00FF6A', marginRight: 8 }} />
                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#FFFFFF' }}>
                                Animation 1
                            </Text>
                        </View>

                        <Text style={{ fontSize: 14, color: '#A1A1AA', lineHeight: 20 }}>
                            This is a sample animation description. You can add more details about the animation here.
                        </Text>
                    </View>
                </View>

                <View style={{
                    backgroundColor: '#1f2965',
                    // borderRadius: 16,
                    overflow: 'hidden',
                    // marginBottom: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    elevation: 5,
                }}>
                    {/* <View style={{ height: 200, backgroundColor: 'red', marginBottom: 10, }} /> */}
                    <Video
                        source={require('../Assets/Towhidul_Mobile_App_Deveoper_intro.mp4')}
                        style={{ width: '100%', height: 200, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                        controls={true}
                        autoPlay={false}
                    />

                    <View style={{ padding: 16 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#00FF6A', marginRight: 8 }} />
                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#FFFFFF' }}>
                                Animation 1
                            </Text>
                        </View>

                        <Text style={{ fontSize: 14, color: '#A1A1AA', lineHeight: 20 }}>
                            This is a sample animation description. You can add more details about the animation here.
                        </Text>
                    </View>
                </View>

                <View style={{
                    backgroundColor: '#1f2965',
                    // borderRadius: 16,
                    overflow: 'hidden',
                    // marginBottom: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    elevation: 5,
                }}>
                    {/* <View style={{ height: 200, backgroundColor: 'red', marginBottom: 10, }} /> */}
                    <Video
                        source={require('../Assets/Towhidul_Mobile_App_Deveoper_intro.mp4')}
                        style={{ width: '100%', height: 200, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                        controls={true}
                        autoPlay={false}
                    />

                    <View style={{ padding: 16 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#00FF6A', marginRight: 8 }} />
                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#FFFFFF' }}>
                                Animation 1
                            </Text>
                        </View>

                        <Text style={{ fontSize: 14, color: '#A1A1AA', lineHeight: 20 }}>
                            This is a sample animation description. You can add more details about the animation here.
                        </Text>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default AnimationScreen

const styles = StyleSheet.create({})