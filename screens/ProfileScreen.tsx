import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ProfileScreen({ navigation }: any) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>ProfileScreen</Text>
            <Button
                title="Go To Feed"
                onPress={() =>
                    navigation.navigate('Feed')
                }
            />
        </View>
    )
}