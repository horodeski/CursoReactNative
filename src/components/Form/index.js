import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import ResultIMC from 'onebit/src/components/ResultIMC/index.js';

export default function Form(){

const [height, setHeight] = useState(null) // Por padrão esse campo vem nulo
const [weight, setWeight] = useState(null)
const [messageIMC, setMessageIMC]= useState("Preencha a altura e o peso");
const [imc, setIMC]= useState(null)
const [TextButton, setTextButton]= useState("Calcular")

function imcCalculator() {
    return setIMC((weight/(height*height)).toFixed(2))
}
function validationIMC() {
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageIMC("Seu imc é igual:")
        setTextButton("Calcular novamente")
        return
    }
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha a altura e o peso")
}

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.55"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput 
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 53.458"
                    keyboardType="numeric"
                />
                <Button 
                    onPress={() => validationIMC()}
                    title={TextButton}
                />         
            </View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />
        </View>
    )
}