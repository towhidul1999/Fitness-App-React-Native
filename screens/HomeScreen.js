import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>

                {/* Left Side */}
                <View style={styles.leftSection}>
                    <Image
                        source={require('../Assets/profile.png')}
                        style={styles.profileImage}
                    />

                    <View style={styles.textContainer}>
                        <Text style={styles.greeting}>Good Morning 👋</Text>
                        <Text style={styles.name}>Towhidul</Text>
                    </View>
                </View>

                {/* Right Side */}
                <TouchableOpacity style={styles.notificationButton}>
                    <Image
                        source={require('../Assets/notification (1).png')}
                        style={styles.notificationIcon}
                    />
                </TouchableOpacity>



            </View>


            {/* Banner Section:***** */}
            <View>
                <View style={styles.bannerSection}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>
                        Welcome to the Home Screen!
                    </Text>
                </View>
            </View>


            {/* Meal Plan Section:***** */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#111827' }}>
                    Meal Plan For 810 kcal
                </Text>

                <View style={{ height: 180, backgroundColor: '#E0F2FE', padding: 20, borderRadius: 12, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image
                            source={require('../Assets/breakfast.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#111827' }}>
                            Breakfast
                        </Text>
                        <Text style={{ fontSize: 14, color: '#6B7280' }}>
                            300 kcal
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Image
                            source={require('../Assets/breakfast.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#111827' }}>
                            Lunch
                        </Text>
                        <Text style={{ fontSize: 14, color: '#6B7280' }}>
                            400 kcal
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Image
                            source={require('../Assets/breakfast.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#111827' }}>
                            Dinner
                        </Text>
                        <Text style={{ fontSize: 14, color: '#6B7280' }}>
                            110 kcal
                        </Text>
                    </View>
                </View>

            </View>


            {/* Card Section:***** */}
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '32%', height: 150, backgroundColor: '#FEE2E2', borderRadius: 12, padding: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#B91C1C' }}>
                        My Weight
                    </Text>
                    <Image
                        source={require('../Assets/weight.png')}
                        style={{ width: 60, height: 60, marginTop: 10 }}
                    />
                </View>
                <View style={{ width: '32%', height: 150, backgroundColor: '#FEE2E2', borderRadius: 12, padding: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#B91C1C' }}>
                        Water Intake
                    </Text>
                    <Image
                        source={require('../Assets/waterdrop.png')}
                        style={{ width: 60, height: 60, marginTop: 10 }}
                    />
                </View>
                <View style={{ width: '32%', height: 150, backgroundColor: '#FEE2E2', borderRadius: 12, padding: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#B91C1C' }}>
                        Workout Plan
                    </Text>
                    <Image
                        source={require('../Assets/handgrip.png')}
                        style={{ width: 60, height: 60, marginTop: 10 }}
                    />
                </View>
            </View>

            {/* Baneer scrolling section:***** */}
            <View style={{ marginTop: 10, height: 100, backgroundColor: '#4ADE80', borderRadius: 12, padding: 20 }}>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                    <View style={{ width: 340, height: 100, backgroundColor: '#fbca07', borderRadius: 12, padding: 20, marginRight: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>
                            Banner 1
                        </Text>
                    </View>
                    <View style={{ width: 340, height: 100, backgroundColor: '#a672ff', borderRadius: 12, padding: 20, marginRight: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>
                            Banner 2
                        </Text>
                    </View>
                </ScrollView>
            </View>




        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        paddingTop: 60,
        paddingHorizontal: 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
    },

    textContainer: {
        marginLeft: 12,
    },

    greeting: {
        fontSize: 14,
        color: '#6B7280',
    },

    name: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111827',
        marginTop: 2,
    },

    notificationButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',

        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 3,
        },

        elevation: 5,
    },

    notificationIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    // Banner Section:*****
    bannerSection: {
        marginTop: 20,
        height: 150,
        backgroundColor: '#4ADE80',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#E0F2FE',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        elevation: 5,
    },



});