<template>
    <div>
        <div v-if="isStarted">
            <h4 class="text-xl font-semibold">
                Cúal es el resultado de:
                {{ operandLeft }} {{ operator }} {{ operandRight }} ?</h4>
            <button 
                @click="selectAnswer(answer)" 
                v-for="(answer, index) of answers" :key="index">{{answer}}
            </button>
        </div>
        <div v-if="!isStarted">
            <button @click="startQuizz">Start Quizz</button>
        </div>
        <button @click="$emit('onBack')">Back</button>
    </div>
</template>

<script>
export default {
    name:'OperatorQuizz',
    props:['operator'],
    data(){
        return{
            operandLeft:null,
            operandRight:null,
            isStarted:false,
            answers:[],
            exceptedAnswer:null
        }
    },
    methods: {
        startQuizz(){
            this.isStarted = true
            this.operandLeft = parseInt(Math.random() * 13)
            this.operandRight = parseInt(Math.random() * 13)
            const methods = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                '/': (a, b) => a / b,
                '*': (a, b) => a * b,
            }

            const methodToUse = methods[this.operator]
            this.answers = []
            for (let i = 0; i < 5; i++) {
                const answer = methodToUse(
                    parseInt(Math.random() * 3), 
                    parseInt(Math.random())
                );
                this.answers.push(answer)                
            }
            const exceptedAnswer = methodToUse(this.operandLeft, this.operandRight)
            this.answers[parseInt(Math.random() * this.answers.length)] = exceptedAnswer
            this.exceptedAnswer = exceptedAnswer
        }, 
        selectAnswer(answer){
            if (answer === this.exceptedAnswer) {
                this.startQuizz()
            }else{
                alert('Wrong answer')
            }
        }
    },
}
</script>

<style scoped>
  button{
    background-color: #7fbf7f;
    padding: 10px;
    font-size: 24px;
    width: 200px;
    margin: 10px 30px;
  }
</style>