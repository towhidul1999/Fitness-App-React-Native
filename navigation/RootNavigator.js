import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';

import HomeScreen from '../screens/HomeScreen';
import BottomTabs from './BottomTabs';
import AnimationScreen from '../screens/AnimationScreen';
import GetTrainScreen from '../screens/GetTrainScreen';
import { Image } from 'react-native';

// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>

            <Tab.Navigator

                screenOptions={{
                    headerShown: false,

                    tabBarActiveTintColor: '#ffffff',
                    tabBarInactiveTintColor: '#11110f',

                    tabBarStyle: {
                        position: 'absolute',
                        marginHorizontal: 20,
                        bottom: 20,
                        height: 70,
                        paddingTop: 8,
                        paddingBottom: 10,
                        backgroundColor: '#a1aabd',
                        opacity: 0.9,
                        borderRadius: 20,
                        borderTopWidth: 0,
                        elevation: 10,
                        shadowColor: '#ffff00',
                        shadowOpacity: 0.08,
                        shadowOffset: { width: 0, height: -3 },
                        shadowRadius: 8,
                    },

                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '800',
                    },
                }}

            >

                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                source={require('../Assets/home (1).png')}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Animation"
                    component={AnimationScreen}
                    options={{
                        headerShown: false, tabBarIcon: () => (
                            <Image
                                source={require('../Assets/play-button.png')}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        )
                    }
                    }
                />

                <Tab.Screen
                    name="GetTrain"
                    component={GetTrainScreen}
                    options={{
                        headerShown: false, tabBarIcon: () => (
                            <Image
                                source={require('../Assets/secure.png')}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        ),
                    }}
                />

                {/* <Stack.Screen
                    name="MainTabs"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                /> */}

            </Tab.Navigator>

        </NavigationContainer>
    );
}