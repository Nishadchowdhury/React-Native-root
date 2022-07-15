import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View>
            <Text>Country {country?.name.common}</Text>
            <Image

                source={{
                    uri: country?.flags.png
                }}
                style={{ width: 300, height: 200 }}
            >


            </Image>
        </View>
    )
}