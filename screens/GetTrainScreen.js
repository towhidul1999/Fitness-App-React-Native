import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const GetTrainScreen = () => {
    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 65, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00ff6a' }}>Get Train Screen</Text>
            </View>

            <ScrollView style={{ marginTop: 10, }} showsVerticalScrollIndicator={false}>
                <View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15, backgroundColor: '#a1aabd', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                            <Text style={{ fontSize: 10, color: '#000', paddingLeft: 10 }}>Experience: 5 years</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10, marginLeft: 80 }}>Rating: 4.5</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', marginTop: 15, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#000', paddingVertical: 10, borderRadius: 8, marginRight: 8, alignItems: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' }}>BOOK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 10, borderRadius: 8, marginLeft: 8, alignItems: 'center', borderWidth: 1, borderColor: '#000' }}>
                                <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>


                <View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15, backgroundColor: '#a1aabd', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                            <Text style={{ fontSize: 10, color: '#000', paddingLeft: 10 }}>Experience: 5 years</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10, marginLeft: 80 }}>Rating: 4.5</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', marginTop: 15, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#000', paddingVertical: 10, borderRadius: 8, marginRight: 8, alignItems: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' }}>BOOK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 10, borderRadius: 8, marginLeft: 8, alignItems: 'center', borderWidth: 1, borderColor: '#000' }}>
                                <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15, backgroundColor: '#a1aabd', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                            <Text style={{ fontSize: 10, color: '#000', paddingLeft: 10 }}>Experience: 5 years</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10, marginLeft: 80 }}>Rating: 4.5</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', marginTop: 15, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#000', paddingVertical: 10, borderRadius: 8, marginRight: 8, alignItems: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' }}>BOOK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 10, borderRadius: 8, marginLeft: 8, alignItems: 'center', borderWidth: 1, borderColor: '#000' }}>
                                <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15, backgroundColor: '#a1aabd', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                            <Text style={{ fontSize: 10, color: '#000', paddingLeft: 10 }}>Experience: 5 years</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10, marginLeft: 80 }}>Rating: 4.5</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', marginTop: 15, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#000', paddingVertical: 10, borderRadius: 8, marginRight: 8, alignItems: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' }}>BOOK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 10, borderRadius: 8, marginLeft: 8, alignItems: 'center', borderWidth: 1, borderColor: '#000' }}>
                                <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
                <View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15, backgroundColor: '#a1aabd', marginBottom: 10, borderRadius: 12 }}>
                        <Image source={require('../Assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 12 }} />
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10 }}>Trainer card</Text>
                            <Text style={{ fontSize: 10, color: '#000', paddingLeft: 10 }}>Experience: 5 years</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000', padding: 10, marginLeft: 80 }}>Rating: 4.5</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', marginTop: 15, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#000', paddingVertical: 10, borderRadius: 8, marginRight: 8, alignItems: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' }}>BOOK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 10, borderRadius: 8, marginLeft: 8, alignItems: 'center', borderWidth: 1, borderColor: '#000' }}>
                                <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold' }}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

export default GetTrainScreen

const styles = StyleSheet.create({})