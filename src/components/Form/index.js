import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import ResultIMC from 'onebit/src/components/ResultIMC/index.js';

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex. 1.55"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput 
                    placeholder="Ex. 53.458"
                    keyboardType="numeric"
                />
                <Button title="Calcular IMC"/>         
            </View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={IMC} />
        </View>
    )
}