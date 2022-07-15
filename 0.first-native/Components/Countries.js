import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Country from './Country';

export default function Countries() {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                setSearch(data)
            })
    }, []);


    const handleSearch = text => {
        const filtered = countries.filter(country => country.name.common.includes(text));
        setSearch(filtered);
    }

    return (
        <View>
            <Text style={styles.header} >Countries: {countries.length}</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleSearch}
            >

            </TextInput>
            <ScrollView>
                {
                    search.map((country, i) => <Country key={i} country={country} />)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})